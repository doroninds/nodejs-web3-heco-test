const config = require('./../config')
const BasicController = require('./BasicController')
const di = require('../di')

const TestContract = di('TestContract')

class ContractController extends BasicController {
  async list(req, res, next) {
    try {
      const data = await TestContract.list()
      res.send(super.response(data))
    } catch (error) {
      next(error)
    }
  }

  async changeName(req, res, next) {
    try {
      if (!req.body.idx === 0 && !req.body.idx) {
        throw new Error('idx(int) is required')
      }
      if (!req.body.name) {
        throw new Error('name(string) is required')
      }
      const data = await TestContract.changeName(req.body.idx, req.body.name)
      res.send(super.response(data))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ContractController()
