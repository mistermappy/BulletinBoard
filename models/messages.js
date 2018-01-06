const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:nppsjuoll@localhost:3050/postgres');

let Messages = sequelize.define('messages', {
  title: Sequelize.STRING,
  body: Sequelize.STRING
})

module.exports = Messages; 
