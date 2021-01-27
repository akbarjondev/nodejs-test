const path = require('path')

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, '../View', '/index.html'))
}

const POST = (req, res) => {
	console.log(req.body)
}

module.exports.TOKEN = {
	GET,
	POST
}