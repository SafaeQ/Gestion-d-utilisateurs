const {
    Sequelize,
    QueryTypes
} = require('sequelize');
const db = {}

const sequelize = new Sequelize('usermangementsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('My Connection has been established successfully.');
}).catch((error) => {
    console.error('cannot to connect to the database:', error)
})


// console.log('somthing..')
// async function test() {
//     const users = await db.query("SELECT * FROM `users`", {
//         type: QueryTypes.SELECT
//     });
//     console.log(users);
// }
// test()

module.exports = sequelize