const express = require('express');
const router = express.router;
const db = require('../db')

router.get('/all', (req, res) => {
    db.User.findAll().then(users => res.send(users))
})