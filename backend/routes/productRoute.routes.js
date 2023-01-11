const express = require('express')
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteproduct,
  getProductDetails,
} = require('../controllers/productController.controllers')

const router = express.Router()

//creating routes

//get request
router.route('/products').get(getAllProducts)
//post request
router.route('/products/new').post(createProduct)
//update
router.route('/product/:id').put(updateProduct)
//delete
router.route('/product/:id').delete(deleteproduct)
//getproductdetails
router.route('/product/:id').get(getProductDetails)

module.exports = router
