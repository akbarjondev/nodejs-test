const path = require('path')
const sha1 = require('sha1')
const users = require('./../Model/users')

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, '../View', '/token.html'))
}

const POST = (req, res) => {

	const { username, password } = req.body

	const user = users.find(u => u.username === username && u.password === password)

	if(Boolean(user)) {
		res.send({
			token: sha1(username + user.password + (new Date).getTime()),
			userId: user.id
		}).end()
	} else {
		res.status(401).end()
	}
}

module.exports.TOKEN = {
	GET,
	POST
}