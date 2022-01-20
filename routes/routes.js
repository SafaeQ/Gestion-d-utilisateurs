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

// import functions of departement from controller (CRUD)
const {
    getAllDepartement,
    getDepartement,
    updateDepartement,
    createDepartement,
    deleteDepartement
} = require('../controllers/departementController')

// router.get('/', (req, res) => {
//     res.render('home');
// })
// routes of users
router.get('/', getAllUsers)
router.get('/users/:id', oneUser)
router.post('/', createUser)
router.put('/update/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.delete('/usersdel', deleteAllUsers)

// routes of departements
router.get('/departements', getAllDepartement)
router.get('/departements/:id', getDepartement)
router.put('/departement/:id', updateDepartement)
router.post('/departement', createDepartement)
router.delete('/departement/:id', deleteDepartement)

module.exports = router;