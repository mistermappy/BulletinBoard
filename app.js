const express = require('express');
const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('list')
});

app.get('/post', (req, res) => {
  res.render('post')
});

app.listen(3050, ()=> {
  console.log('Listening on port 3050..')
  }
);
