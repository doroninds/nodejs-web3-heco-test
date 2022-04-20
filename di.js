const TestContract = require('./contracts/TestContract')
const config = require('./config')

function di(module) {
  const di = {}
  di.TestContract = new TestContract(config.env.baseUrl, config.contracts.test.abi, config.env.contractAddress, {
    from: config.env.testWallet,
  })

  return di[module]
}

module.exports = di
