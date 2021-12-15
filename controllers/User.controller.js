const userModel = require('../models/User.model');
const saltRouds = 10;

const bcrypt = require('bcrypt');


const register = async (req, res, next) => {
    if(typeof req.body.email === 'undefined' 
    || typeof req.body.firstName === 'undefined'
    || typeof req.body.lastName === 'undefined'
    || typeof req.body.password === 'undefined'
    || typeof req.body.address === 'undefined'
    || typeof req.body.phone_number === 'undefined') {
        res.status(400).json({message: 'invalid data'});
        return;
    }
    let {email, firstName, lastName, password, address, phone_number, is_admin, is_verify, token} = req.body
    try {
        if(await userModel.userFind(email)) {
            res.status(400).json({message: 'Email already exist'})
        } else {
            const hashPassword = await bcrypt.hashSync(password, saltRouds);
            await userModel.createNew({
                email, firstName, lastName, password: hashPassword, 
                address, phone_number, is_admin, is_verify, token
            })
            res.status(200).json({success: true, message: 'SingUp Success'})
        }
    }catch (error){
        res.status(400).send({success: false, message: 'Update Failed'});
        console.log(error);
    }


}
module.exports = {
    register
}