const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:nppsjuoll@localhost:5432/bulletinboard');

sequelize
  .authenticate()
  .then(()=>{
    console.log('connection success..');

  })
  .catch((err)=>{
    console.log('Unable due to', err);
  });

const Messages = sequelize.define('messages', {
  title: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  }
});

module.exports = Messages;
