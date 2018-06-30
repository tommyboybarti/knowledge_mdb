const assert = require('assert')
const WebDev = require('../models/webdev')

// describe test to mocha
describe('Saving records', () => {

  // create tests, with individual test descriptions (it)
  it('Saves record to db', (done) => {
    // this is what we want to get out of the test
    // create new instance of model with a certain property
    let term = new WebDev({
      name: 'href',
      description: 'hypertext reference'
    })
    // save to db (mongoose method), return Promise, then fire fct.
    term.save().then(() => {
      // .isNew returns true when var is created locally but not yet saved on db
      assert(term.isNew === false)
      done()
    })
  })
})