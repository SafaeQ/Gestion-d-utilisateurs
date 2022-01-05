const {
    Sequelize,
    DataTypes
} = require('sequelize');

function Sqlz(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        text: {
            type: DataTypes.String,
            allowNull: false
        }
    })
    return User
}

module.exports = {
    Sqlz
}