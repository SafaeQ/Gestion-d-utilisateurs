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
    }, {
        // additional options, like classMethods in which you could create the association
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.Departement);
            }
        }
    });
    // User.belongsTo(Departement);
    return User;
};