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
module.exports = {
    getAllUsers,
    oneUser,
    // createUser,
}