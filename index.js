const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send('Salom bu index')
})

server.listen(4000, () => console.log('Ready at 4000'))