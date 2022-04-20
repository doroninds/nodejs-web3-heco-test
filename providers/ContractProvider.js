const https = require('https')
const http = require('http')
const Web3HttpProvider = require('web3-providers-http')

class ContractProvider {
  static getHttpProvider(baseUrl) {
    const isHttps = baseUrl.startsWith('https://')

    const agent = isHttps ? https.Agent : http.Agent

    const options = {
      keepAlive: true,
      timeout: 20000,
      headers: [{ name: 'Access-Control-Allow-Origin', value: '*' }],
      withCredentials: false,
      agent: { http: agent(), baseUrl },
    }

    return new Web3HttpProvider(baseUrl, options)
  }
}

module.exports = ContractProvider

module.exports.getHttpProvider = ContractProvider.getHttpProvider
