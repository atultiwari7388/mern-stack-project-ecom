const express = require('express')
const app = express()

const errorMiddleware = require('./middlewares/errorHandler.middlewares')

app.use(express.json())
// route imports

const product = require('./routes/productRoute.routes')

app.use('/api/v1', product)

//middlewares for errors
app.use(errorMiddleware)

module.exports = app
