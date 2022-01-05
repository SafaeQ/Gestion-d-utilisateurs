const Sequelize = require('sequelize');
const {
    QueryTypes
} = require('sequelize');
const db = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate().then(() => {
    console.log('My Connection has been established successfully.');
}).catch((error) => {
    console.error('cannot to connect to the database:', error)
})


// console.log('somthing..')
// db.query('SELECT * FROM users')
async function omma() {
    const users = await db.query("SELECT * FROM `users`", {
        type: QueryTypes.SELECT
    });
    console.log(users);
}

omma()

module.exports = {
    db
}