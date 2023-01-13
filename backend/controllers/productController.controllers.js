const Product = require('../models/productModel.models')
const ErrorHandler = require('../utils/erroHandler.utils')
const catchError = require('../middlewares/catchErroHandler.middlewares')
const ApiFeatures = require('../utils/apifeatures.utils')

//create product => Admin routes

exports.createProduct = catchError(async (req, res, next) => {
  const product = await Product.create(req.body)

  res.status(201).json({
    success: true,
    product,
  })
})

//get all products

exports.getAllProducts = catchError(async (req, res) => {
  //for search pagination

  const resultPerPage = 5
  const productCount = await Product.countDocuments()

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
  const products = await apiFeature.query
  res.status(200).json({
    success: true,
    products,
  })
})

//getProductDetails
exports.getProductDetails = catchError(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  res.status(200).json({
    success: true,
    product,
    productCount,
  })
})

//update product - Admin

exports.updateProduct = catchError(async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  })

  res.status(200).json({
    success: true,
    product,
  })
})

// delete product
exports.deleteproduct = catchError(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler('Product not found', 404))
  }

  await product.remove()

  res.status(200).json({
    success: true,
    message: 'Product Delete successfully',
  })
})
