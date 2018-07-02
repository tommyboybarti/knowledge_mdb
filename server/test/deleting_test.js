const WebDev = require('../models/webdev')
const assert = require('assert')

describe('Deleting records', () => {
  // giving access to the variable
  let term = ''
  // creating an instance of the model with another mocha hook (beforeEach) before tests are run
  beforeEach(async () => {
    let term = new WebDev({
      name: 'href',
      description: 'hypertext reference'
    })
    await term.save()
  })
  // does not work correctly
  it('Deletes one record from db', async () => {
    await WebDev.findOneAndRemove({ name: 'hreasdffe' })
    async () => {
      await WebDev.fineOne({ name: 'hrasfef' })
      async (result) => {
        await assert(result === null)
      }
    }
  })
})
