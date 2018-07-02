const WebDev = require('../models/webdev')

describe('Finding records', () => {

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
})
