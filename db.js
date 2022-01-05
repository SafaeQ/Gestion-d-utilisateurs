const Sequelize = require('sequelize');
const db = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'MySQL2'
})
try {
    await sequelize.authenticate();
    console.log('My Connection has been established successfully.');
} catch (error) {
    console.error('cannot to connect to the database:', error)
}

module.exports = db;