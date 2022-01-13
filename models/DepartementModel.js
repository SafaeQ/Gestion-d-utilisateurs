module.exports = (sequelize, DataTypes) => {
    const Departements = sequelize.define('Departements', {
        name_departement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        // additional options, like classMethods in which you could create the association
        classMethods: {
            associate: function (models) {
                this.hasMany(models.User, {
                    foreignKey: 'id_departement'
                });
            }
        }
    })

    // Departement.hasMany(User)

    return Departements;
}