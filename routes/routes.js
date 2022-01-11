const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers
} = require('../controllers/userController')

const {
    getAllDepartement,
    getDepartement,
    updateDepartement,
    createDepartement,
} = require('../controllers/departementController')
router.get('/', (req, res) => {
    res.render('home');
})
// routes of users
router.get('/users', getAllUsers)
router.get('/users/:id', oneUser)
router.post('/create', createUser)
router.put('/update/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.delete('/usersdel', deleteAllUsers)

// routes of departements
router.get('/departements', getAllDepartement)
router.get('/departements/:id', getDepartement)
router.put('/departement/:id', updateDepartement)
router.post('/departement', createDepartement)

module.exports = router;