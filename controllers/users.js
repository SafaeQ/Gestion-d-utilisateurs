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
module.exports = {
    getAllUsers,
}