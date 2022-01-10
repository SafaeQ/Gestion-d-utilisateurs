const {
    User
} = require('../models')

const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        raw: true,
    }).catch(err => console.log(err))
    // await res.render('home', users);
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
        // id_ped
    } = await req.body;
    const user = await User.create({
        account_name,
        email,
        password,
        // id_ped
    }).catch(err => console.log(err))
    console.log(user)
    res.send(user)
    // await res.redirect('/')
}

const updateUser = async (req, res) => {
    const {
        id
    } = req.params;
    const data = req.body;
    const selector = {
        where: {
            id: id
        }
    }
    await User.update(data, selector).catch(err => console.log(err))
    res.send('done')
}

const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;
    const user = await User.destroy({
        where: {
            id: id
        }
    }).then(function () {
        // console.log('destroy all data')
        res.send('destroy the data')
        // console.log(user);
    }).catch(err => console.log(err))
    res.send(user)

}
module.exports = {
    getAllUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser
}