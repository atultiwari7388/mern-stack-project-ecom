const mongoose = require('mongoose')

const connectDatabase = async () => {
  return mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then((data) =>
      console.log(`Database connected with server ${data.connection.host}`)
    )
}

module.exports = connectDatabase
