const express = require('express');
const app = express();
const {
    db
} = require('./db')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

const port = 9000

app.get('/', (req, res) => {
    res.send('hello world');
})
app.listen(port, () => {
    console.log(`listening on port  http://localhost:${port}`);
})