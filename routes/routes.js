const express = require('express');
const router = express.Router();
const {
    getAllUsers
} = require('../controllers/users')
router.get('/', (req, res) => {
    res.render('home');
})
router.get('/all', getAllUsers)
module.exports = router;