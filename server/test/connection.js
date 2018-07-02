const mongoose = require('mongoose')

// Connect to db before tests run with a before hook
before((done) => {

  // connect to MongoDB
  mongoose.connect('mongodb://localhost/test')
  
  // create a onetime connection
  mongoose.connection.once('open', () => {
    console.log('Connection has been made')
    done()
  }).on('err', (err) => {
    console.log('Connection error:', err)
  })
})

// drop the webdev collection before each test with another mocha hook (beforeEach)
beforeEach((done) => {
  // drop the collection by reference to the webdevs col out of all the collections
  mongoose.connection.collections.webdevs.drop(() => {
    done()
  })
})
