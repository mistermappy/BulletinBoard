const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) =>{
  res.send('Form for posting..')
});

module.exports = router;
