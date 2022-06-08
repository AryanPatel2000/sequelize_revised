const express = require('express');
const app = express()
//const bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//app.use(bodyParser.json());

let router = require('./routes/customer.route')
app.use('/', router)


const sequelize = require('./config/db.config')

const Customer = require('./model/customer.model');

sequelize.sync({alter:true})
.then( () => {
    console.log(`Table drop and resync with { alter: true}`)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
