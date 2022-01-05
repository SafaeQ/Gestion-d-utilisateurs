const Sequelize = require('sequelize');

const db = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
})

db.authenticate().then(() => {
    console.log('My Connection has been established successfully.');
}).catch((error) => {
    console.error('cannot to connect to the database:', error)
})

console.log('somthing..')

module.exports = {
    db
}