const express = require('express')
const {
  getAllProducts,
} = require('../controllers/productController.controllers')

const router = express.Router()

//creating routes

router.route('/products').get(getAllProducts)

module.exports = router
