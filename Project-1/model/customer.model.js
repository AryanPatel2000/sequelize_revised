const Sequelize = require('sequelize')

const sequelize = require('../config/db.config')

    const Customer = sequelize.define('customer', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                notNull: {msg: 'ans email is required'}
            },
            isEmail: {
                msg: 'Please use the correct email format : user@example.com'
                
            },
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull : false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull : false
        },
        city: {
            type: Sequelize.STRING,
            allowNull : false 
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })


    module.exports = Customer
  
