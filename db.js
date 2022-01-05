const Sequelize = require('sequelize');
const db = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('My Connection has been established successfully.');
}).catch((error) => {
    console.error('cannot to connect to the database:', error)
})

module.exports = db;