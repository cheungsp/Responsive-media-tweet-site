const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let items = req.cookies.tasks;
  res.render('dashboard', {items});
});


module.exports = router;
