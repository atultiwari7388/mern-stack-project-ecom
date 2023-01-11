const Product = require('../models/productModel.models')

//create product

exports.createProduct = async (req, res, next) => {}

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: 'Route is working fine' })
}
