const WebDev = require('../models/webdev')
const assert = require('assert')

describe('Finding records', () => {
  // giving access to the variable
  let term = ''
  // creating an instance of the model with another mocha hook (beforeEach)
  beforeEach(async () => {
    let term = new WebDev({
      name: 'href',
      description: 'hypertext reference'
    })
    await term.save()
  })
  it('Finds one record from db', async () => {
    // find all records with find({})
    await WebDev.findOne({ name: 'href' })
    async (result) => {
      await assert(result.name === 'href')
    }
  })
  it('Finds one record BY ID from db', async () => {
    await WebDev.findOne({ _id: term._id })
    async (result) => {
      // ids are Objects in mongodb, so we have to call toString
      await assert(result._id.toString() === term._id.toString())
    }
  })
})
