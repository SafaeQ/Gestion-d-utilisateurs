module.exports = (sequelize, DataTypes) => {
    // define the name of model and its properties
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
        id_departement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }, {
        // additional options, like classMethods in which you could create the association
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.Departement, {
                    onDelete: 'cascade'
                });
            }
        }
    });
    return User;
};