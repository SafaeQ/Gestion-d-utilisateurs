const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const router = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname)))
app.engine('hbs', exphbs({
    extname: ".hbs"
}));
app.set('view engine', 'hbs')
app.use('/', router);
const port = 9000

app.get('/', (req, res) => {
    res.send('hello world');
})
app.listen(port, () => {
    console.log(`listening on port  http://localhost:${port}`);
})