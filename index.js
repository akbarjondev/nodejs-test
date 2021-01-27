const sha1 = require('sha1')
const CONFIG = require('./src/config')
const express = require('express')

const users = require('./src/Model/users')
const Home = require('./src/Controller/Home')
const { TOKEN: Token } = require('./src/Controller/Token')

const app = express()

app.use(express.json())

app.use(express.static('public'))

let my_token = []

// app.use((req, res, next) => {
// 	const { username, password } = req.body
// 
// 	const user = users.find(u => u.username === username && u.password === password)
// 	
// 	if(Boolean(user)) {
// 		const token = sha1(user.username + user.password + (new Date).getTime())
// 
// 		my_token.push(token)
// 
// 		res.send({
// 			token: token,
// 			userId: user.id
// 		}).end()
// 
// 		// next()
// 	} else {
// 		res.status(401).end()
// 	}
// })

app.get('/', Home.GET)

app.get('/token', Token.GET)

app.post('/token', Token.POST)

app.listen(CONFIG.PORT, () => console.log(`Ready at ${CONFIG.PORT}`))
