const Sequelize = require('sequelize')

const sequelize = new Sequelize('new_schema', 'root', 'Mohit@12345',
    {
        dialect: 'mysql',
        host: 'localhost'
    })
module.exports=sequelize;
