
const mongoose = require('mongoose');
require('dotenv/config')

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONECTION, 
            { useNewUrlParser: true },
            () => console.log('Connect success database username: ', process.env.DATABASE_NAME)
            );
    }
    catch(error) {
        console.log('Connect error');
    }
}


module.exports = connectDB;