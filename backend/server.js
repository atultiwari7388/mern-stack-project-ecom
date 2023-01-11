const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database.config.js')

//config
dotenv.config({ path: 'backend/config/config.env' })

app.listen(process.env.PORT, async () => {
  try {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
    //db connect
    await connectDatabase()
  } catch (error) {
    console.log(error)
  }
})
