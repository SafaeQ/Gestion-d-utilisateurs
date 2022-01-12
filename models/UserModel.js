module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
    User.belongsTo(Departement, {
        as: 'departement',
        foreignKey: 'id_departement'
    });
    return User;
};