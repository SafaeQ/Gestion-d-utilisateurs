const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    oneUser,
    // editUser,
} = require('../controllers/userController')

// router.get('/', (req, res) => {
//     res.render('home');
// })
router.get('/', getAllUsers)
router.get('/users/:id', oneUser)
// router.post('/create', createUser)
// router.get('/edit/:id', editUser)
module.exports = router;