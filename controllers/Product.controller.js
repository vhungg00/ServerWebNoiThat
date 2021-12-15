const productModel = require('../models/Product.model');

const add_product = async (req, res, next) => {
        const {name, price, image, shipping, stars, category,
            stock, colors, images, reviews, description} = req.body
        try {
            const data = await productModel.createProduct({name, price, image, shipping, stars, 
            category, stock, colors, images, reviews, description});
            res.status(200).send({ success: true, message: 'Add Product Success', data : data});
        } catch (error) {
            res.status(400).send({success: false, message: 'Update Failed'});
        }
}

const getProduct = async (req, res, next) => {
    try{
        const data = await productModel.getProduct();
        console.log(data.length);
        res.status(200).send({success: true, data});
    } catch(error) {
        res.status(400).send({success: false, message: "Get Product Failed"});
    }
}

const getProduct_detail = async(req, res, next) => {
    try{
        const data = await productModel.getProduct_detail(req.params._id);
        res.status(200).send({success: true, data});
    }catch {
        res.status(400).send({success: false, message: "Get Product Failed"})
    }
}
const updateProdutByID = async(req, res, next) => {
    try{
        const data = await productModel.findProductByIdAndUpdateProduct(req.params._id, req.body);
        res.status(200).send({success: true, message:'Update Product Done !', data: data});
    } catch {
        res.status(400).send({success: false, message: 'Update Product Failed !'});
    }
}

module.exports = {
    add_product,
    getProduct,
    getProduct_detail,
    updateProdutByID
}