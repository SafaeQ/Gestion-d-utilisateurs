const {
    User,
} = require('../models')


// async function that have a promise
const getAllUsers = async (req, res) => {
    const users = await User.findAll({

            // return the raw result
            raw: true,
        })
        .catch(err => console.log(err))

    res.render('home.ejs', {
        users: users
    })

    // res.send(users)
}

const oneUser = async (req, res) => {
    const user = await User.findOne({
        raw: true,
    }).catch(err => console.log(err))
    // res.render('home', {
    //     user: user
    // });
    res.send(user)
}

const createUser = async (req, res) => {
    const {
        account_name,
        email,
        password,
        id_departement
    } = req.body;
    const user = await User.create({
        account_name,
        email,
        password,
        id_departement
    }).catch(err => console.log(err))
    res.redirect("/")


    // console.log(user)
    // res.send(user)
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
    res.render('/', {
        id: rows[0].id,
        account_name: rows[0].account_name,
        email: rows[0].email
    })
    // res.redirect('/');
    // res.send('done')
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
        res.send(`destroy the data id: ${id}`)
        // console.log(user);
    }).catch(err => console.log(err))

    res.send(user)
}

const deleteAllUsers = async (req, res) => {
    const user = await User.destroy({
        where: {},
        truncate: false
    }).then(function () {
        res.send('delete all')
    }).catch(err => console.log(err))

    res.send(user)
}
module.exports = {
    getAllUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers
}