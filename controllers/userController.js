const {
    User
} = require('../models')

const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        raw: true,
    }).catch(err => console.log(err))
    // await res.render('home', {
    //     users
    // });
    res.send(users)
}
const oneUser = async (req, res) => {
    const user = await User.findOne({
        raw: true,
    }).catch(err => console.log(err))
    res.send(user)
}

const createUser = async (req, res) => {
    const {
        account_name,
        email,
        password,
        id_ped
    } = await req.body;
    const user = await User.create({
        account_name,
        email,
        password,
        id_ped
    }).catch(err => console.log(err))
    console.log(user)
    res.send(user)
    // await res.redirect('/')
}
module.exports = {
    getAllUsers,
    oneUser,
    createUser,
}