const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/', (req, res) => {
    db.User.findAll().then(users => res.send(users))
})