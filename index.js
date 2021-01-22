const express = require('express')

const server = express()

server.get('/', (req, res) => {
	res.send('Salom bu index emas').end()
})

server.listen(process.env.PORT || 8080, () => console.log('Ready at 8080'))