const Sequelize = require('sequelize');
const con = new Sequelize('user_mangement_system', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

con.authenticate().then(() => {
    console.log('My Connection has been established successfully.');
}).catch((error) => {
    console.error('cannot to connect to the database:', error)
})


// console.log('somthing..')
// async function test() {
//     const users = await con.query("SELECT * FROM `users`", {
//         type: QueryTypes.SELECT
//     });
//     console.log(users);
// }
// test()

module.exports = con