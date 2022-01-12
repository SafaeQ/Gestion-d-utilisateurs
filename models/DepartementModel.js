module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('Departements', {
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
                this.hasMany(models.User);
            }
        }
    })

    // Departement.hasMany(User)

    return Departement;
}