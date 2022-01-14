const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 5000;
const router = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'assets/css'))
// set template engine
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', router);

app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
})