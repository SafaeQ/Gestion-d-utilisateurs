const express = require('express');
const {
    db
} = require('./db');
const app = express();
const port = 9000

app.get('/', (req, res) => {
    res.send('hello world');
})
app.listen(port, () => {
    console.log(`listening on port  http://localhost:${port}`);
})