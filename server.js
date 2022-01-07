// const app = express();
// const con = require('./db')
// const db = require('./models')
// const {
//     getAllUsers
// } = require('./controllers/users')

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs')

// const port = 6000
// app.get('/', (req, res) => {
//     res.send('hello world');
// })
// app.get('/all', (req, res) => {
//     getAllUsers(res, req).then(users => res.send(users))
// })

// app.listen(() => {
//     console.log(`listening on port http://localhost:${port}`);
// })

const express = require('express');
const app = express();
const port = 5000;
const router = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/', router);
// app.get('/all', (req, res) => {
//     res.render("home");
// })
app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
})