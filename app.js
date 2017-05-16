const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');
const dashboard = require('./routes/dashboard');


const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
  const {cookies} = req;
  console.log(cookies);
  next();
});

app.use('/', home);

app.use('/dashboard', dashboard);

const PORT = 4545;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
