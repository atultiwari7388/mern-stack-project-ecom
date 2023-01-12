const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database.config.js')

//hanlde Uncaught Exception

process.on('uncaughtException', (err) => {
  console.log(`Error:${err.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)
  process.exit(1)
})

//config
dotenv.config({ path: 'backend/config/config.env' })

const server = app.listen(process.env.PORT, async () => {
  try {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
    //db connect
    await connectDatabase()
  } catch (error) {
    console.log(error)
  }
})

//unhandle promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error:${err.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)
  server.close(() => {
    process.exit(1)
  })
})
