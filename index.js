const express = require('express')
const app = express()

const mongo = require('./src/persistence/mongodb')
mongo();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/** Import routers */
const signupRoute = require('./src/routers/signup-route')
const loginRoute = require('./src/routers/login-route')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/signup', signupRoute)
app.use('/login', loginRoute)

app.listen(3000)