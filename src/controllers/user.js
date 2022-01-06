const models = require('../models/Users')


function getAllUsers(req, res, next) {
    return models.User
        .findAll({
            paranoid: false
        })
        .then(users => res.status(200).json({
            status: 'okkk',
            users
        }))
        .catch(err => console.log(err));
}
module.exports = {
    getAllUsers,
}