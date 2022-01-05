const Sequelize = require('sequelize');
const db = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'MySQL2'
})
try {

} catch (error) {
    console.error('cannot to connect to the database:', error)
}

module.exports = db;