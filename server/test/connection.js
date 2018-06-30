const mongoose = require('mongoose')

// connect to MongoDB
mongoose.connect('mongodb://localhost/test')

// create a onetime connection
mongoose.connection.once('open', () => {
  console.log('Connection has been made')
}).on('err', (err) => {
  console.log('Connection error:', err)
})