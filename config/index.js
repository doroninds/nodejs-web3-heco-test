
require('dotenv').config()

const { TEST_CONTACT_URL = '', MNEMONIC_PHRASE = '', APP_PORT = 3000, TEST_WALLET = '',CONTRACT_ADDRESS =''  } = process.env

const env = {
  testWallet: TEST_WALLET,
  port: APP_PORT,
  mnemonic: MNEMONIC_PHRASE,
  contractAddress: CONTRACT_ADDRESS,
  baseUrl: TEST_CONTACT_URL,
  gasLimit: 2500000,
}

const contracts = {
  test: require('../contracts/TestContract.json')
}
module.exports = {
  env,
  contracts
}

module.exports.env = env