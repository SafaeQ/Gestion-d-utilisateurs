const express = require('express');
const router = express.Router();
const {
    getAllUsers
} = require('../controllers/userController')

router.get('/', (req, res) => {
    res.render('home');
})
router.get('/all', getAllUsers)
router.get('/create', )
module.exports = router;