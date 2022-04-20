const express = require('express')
const ContractController = require('./controllers/ContractController')
const config = require('./config')

const app = express()
app.use(express.json())


const port = config.env.port

app.get('/list', ContractController.list)
app.post('/changeName', ContractController.changeName)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
