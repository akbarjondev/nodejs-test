const CONFIG = require('./src/config')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Salom bu index emas, aldadim Index').end()
})

app.get('/token', (req, res) => {
	res.send('Token').end()
})

app.listen(CONFIG.PORT, () => console.log(`Ready at ${CONFIG.PORT}`))
