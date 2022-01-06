const express = require('express');
const app = express();
const sequelize = require('./db')
const {
    getAllUsers
} = require('./src/controllers/user')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

const port = 9000
app.get('/', (req, res) => {
    res.send('hello world');
})
app.get('/all', (req, res) => {
    getAllUsers(res, req).then(users => res.send(users))
})
app.listen(port, () => {
    console.log(`listening on port  http://localhost:${port}`);
})