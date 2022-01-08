const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

router.get('/', (req, res) => {
    res.render('home');
})
router.get('/users', getAllUsers)
router.get('/users/:id', oneUser)
router.post('/create', createUser)
router.put('/update/:id', updateUser)
router.delete('/users/:id', deleteUser)
module.exports = router;