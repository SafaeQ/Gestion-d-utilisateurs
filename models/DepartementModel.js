module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('Departement', {
        name_departement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Departement.hasMany(User, {
        as: 'Users'
    })

    return Departement;
}