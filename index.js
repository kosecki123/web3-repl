global.Web3 = require('web3')
global.web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:8545`))

require('repl').start()