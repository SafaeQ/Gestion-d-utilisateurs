const express = require('express');
const app = express();
// to help us create view
const expressLayouts = require('express-ejs-layouts');
const port = 5000;
const router = require('./routes/routes');

// methods that send data in post request works as middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// static files => to serve this files
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'))

// set template engine
app.use(expressLayouts)
app.set('layout', './layouts/layout.ejs')
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', router);

app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
})