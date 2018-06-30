const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Schema
const WebDevSchema = new Schema({
  name: String,
  description: String,
  code: String
})

// export model based on Schema - collection name = webdev
module.exports = mongoose.model('webdev', WebDevSchema)