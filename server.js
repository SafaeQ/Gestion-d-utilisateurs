const express = require('express');
const app = express();
const db = require('./models')
// const {
//     getAllUsers
// } = require('./src/controllers/user')

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs')

const port = 9000
// app.get('/', (req, res) => {
//     res.send('hello world');
// })
// app.get('/all', (req, res) => {
//     getAllUsers(res, req).then(users => res.send(users))
// })
db.sequelize.sync().then((req) => {
    app.listen(() => {
        console.log(`listening on port ${port}`);
    })
})