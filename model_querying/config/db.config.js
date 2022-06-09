const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_test', 'root', '', {
    dialect :'mysql'
})

sequelize.authenticate()
.then( () => {
    console.log('Connection Estlablished Successfully...')
})
.catch(err => {
    console.log(err)
})

module.exports = sequelize;