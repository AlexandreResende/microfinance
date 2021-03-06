//configuring the server

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const helmet = require('helmet');

//importing all the routes of the project
let userRoutes = require('../api/routes/user.routes');
let incomeRoutes = require('../api/routes/income.routes');
let expenseRoutes = require("../api/routes/expense.routes");
let homeRoutes = require("../api/routes/home.routes");

const app = express();

app.set('view engine', 'ejs');
app.set('views', './api/views');

//configuring the middlewares into the app
app
  .use(helmet())
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json())
  .use(express.static('./api/public'))
  .use(expressValidator())
  .use(expressSession({
    secret: 'aiushriauhf', 
    resave: false,
    saveUninitialized: false
    }))
  .use(userRoutes)
  .use(incomeRoutes)
  .use(expenseRoutes)
  .use(homeRoutes);



module.exports = app;