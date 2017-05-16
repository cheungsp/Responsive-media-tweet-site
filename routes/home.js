const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
  if(req.cookies.tasks == null)
  {
    res.cookie('tasks', []);
  }
  res.render('index');
});


router.post('/', (req, res) => {
  let params = req.body
  let task = params.items;

  let todos = req.cookies.tasks;

  todos.push(task.trim())

  res.cookie('tasks', todos);

  res.redirect('/dashboard');

});


module.exports = router;
