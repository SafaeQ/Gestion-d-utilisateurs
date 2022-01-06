const express = require('express');
const router = express.Router();
const db = require('../db')
const {
    getAllUsers
} = require('.././src/controllers/user')

router.get('/', (req, res) => {
    db.getAllUsers.then(users => res.send(users))
})