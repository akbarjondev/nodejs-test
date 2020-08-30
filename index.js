const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send('Salom bu index').end()
})

server.listen(process.env.port || 4000, () => console.log('Ready at 4000'))