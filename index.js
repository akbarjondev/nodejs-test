const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send('Salom bu index').end()
})

console.log(process.env.port)

server.listen(process.env.port || 4000, () => console.log('Ready at 4000'))