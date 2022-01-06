// 'use strict';
module.exports = (sequelize, DataTypes) => {
    const Utilisateur = sequelize.define('User', {
        account_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    // Utilisateur.associate = function (models) {
    //     Utilisateur.belongsTo(models.Departement, {
    //         as: 'departement',
    //         foreignKey: 'idDepartement'
    //     });
    // };
    return Utilisateur;
};


// const models = require('../models/Users')


// controllers
// function getAllUsers(req, res, next) {
//     return models.User
//         .findAll({
//             paranoid: false
//         })
//         .then(users => res.status(200).json({
//             status: 'okkk',
//             users
//         }))
//         .catch(err => console.log(err));
// }
// module.exports = {
//     getAllUsers,
// }