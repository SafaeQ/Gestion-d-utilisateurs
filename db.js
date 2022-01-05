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
async function test() {
    const users = await db.query("SELECT * FROM `users`", {
        type: QueryTypes.SELECT
    });
    console.log(users);
}
// test()

module.exports = {
    db
}