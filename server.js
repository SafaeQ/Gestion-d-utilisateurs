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

app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
})