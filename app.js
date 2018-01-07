const express = require('express');
const bodyParser = require('body-parser');
const Messages = require('./models/post.js');
const validator = require('express-validator')
/*const Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:nppsjuoll@localhost:5432/bulletinboard');

sequelize
  .authenticate()
  .then(()=>{
    console.log('connection success..');

  })
  .catch((err)=>{
    console.log('Unable due to', err);
  });*/
const app = express();
app.use(bodyParser());
app.use(validator())

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    
    Messages.findAll()
      .then(posts => {
        res.render('list', { posts: posts })
      })
  //console.log(Post)

});

app.get('/form', (req, res) => {
  res.render('post')
});

app.post('/form', (req, res)=>{
  //console.log(req.checkBody)
  req.checkBody('title', 'Enter a valid title').matches(/\S/);
  req.checkBody('body', 'Enter a valid message').matches(/\S/);
  const errors = req.validationErrors();
  if (errors) {
    res.send(errors)
  }
  else {
    Messages.sync()
        .then(()=>{
          return Messages.create({
            title: req.body.title,
            body: req.body.body
          });
        })
        .then(()=>{
          res.redirect('/');
        })
  }
})

app.listen(3050, ()=> {
  console.log('Listening on port 3050..')
});
