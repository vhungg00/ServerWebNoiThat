const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/Product.controller')

router.get('/', ProductController.getProduct);

router.get('/getproduct/:_id', ProductController.getProduct_detail);

router.post('/addproduct', ProductController.add_product);

router.put('/updateProduct/:_id', ProductController.updateProdutByID)

module.exports = router