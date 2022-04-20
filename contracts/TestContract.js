const { env } = require('./../config')
const BasicContract = require('./BasicContract')
const getHttpProvider = require('./../providers/ContractProvider').getHttpProvider

class TestContract extends BasicContract {
  constructor(url, abi, address, options) {
    const provider = getHttpProvider(url)
    super(provider, abi, address, options)
    this.defaultWallet = options.from
    this.addAccountByMnemonic(env.mnemonic)
  }
  async list() {
    return super.callMethod('list', { from: this.defaultWallet })
  }

  async changeName(idx, name) {
    return super.sendMethod('setName', { from: this.defaultWallet, gas: env.gasLimit, gasPrice: 0 }, idx, name)
  }
}

module.exports = TestContract
