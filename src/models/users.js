const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = require('../../db')

const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
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
    id_dep: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})
// , {
//     timestamps: true,
//     paranoid: true
// }  
// User.belongsTo(models.properties, {
//     foreignKey: 'id_dep',
//     onDelete: 'CASCADE'
// })

module.exports = {
    User
}