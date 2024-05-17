const express=require('express')

const router=express.Router()

const ProductController= require('../controllers/ProductsController');


router.get('/',ProductController.getAllProducts)
router.get('/:id',ProductController.getAllProducts)
router.get('/search/:key',ProductController.searchProduct)
router.post('/',ProductController.createProduct)


module.exports= router