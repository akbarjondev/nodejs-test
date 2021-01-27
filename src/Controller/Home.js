const path = require('path')

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, '../View', '/index.html'))
}

module.exports.GET = GET