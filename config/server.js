//configuring the server

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const helmet = require('helmet');

//importing all the routes of the project
let userRoutes = require('../api/routes/user.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './api/views');

//configuring the middlewares into the app
app.use(bodyParser.urlencoded({ extended: true}))
   .use(bodyParser.json())
   .use(express.static('./api/public'))
   .use(expressValidator())
   .use(userRoutes)
   .use(expressSession({
                        secret: 'aiushriauhf', 
                        resave: true,
                        saveUninitialized: false
                       }))
   .use(helmet());


module.exports = app;