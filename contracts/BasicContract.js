const Web3 = require('web3')
const ethers = require('ethers')

class BasicContract {
  constructor(provider, abi, address, options) {
    this.provider = provider
    this.web3 = new Web3(provider)
    this.web3.eth.defaultAccount = options.from
    this.contract = new this.web3.eth.Contract(abi, address, options)
  }

  addAccount(address, privateKey) {
    this.web3.eth.accounts.wallet.add({
      privateKey,
      address,
    })
  }

  addAccountByMnemonic(mnemonic) {
    const mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic)
    this.web3.eth.accounts.wallet.add({
      privateKey: mnemonicWallet.privateKey,
      address: mnemonicWallet.address,
    })
  }
  async callMethod(methodName, callParams = undefined, ...methodArgs) {
    return new Promise((resolve, reject) => {
      this.contract.methods[methodName](...methodArgs)
        .call(callParams)
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err))
    })
  }

  async sendMethod(methodName, callParams = undefined, ...methodArgs) {
    return new Promise((resolve, reject) => {
      this.contract.methods[methodName](...methodArgs)
        .send(callParams)
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err))
    })
  }
}

module.exports = BasicContract
