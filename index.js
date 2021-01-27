const CONFIG = require('./src/config')
const express = require('express')

const Home = require('./src/Controller/Home')
const { TOKEN: Token } = require('./src/Controller/Token')

const app = express()

app.get('/', Home.GET)

app.get('/token', Token.GET)

app.post('/token', Token.POST)

app.listen(CONFIG.PORT, () => console.log(`Ready at ${CONFIG.PORT}`))
