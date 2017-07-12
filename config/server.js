const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const consign = require("consign");

const routes = require('../app/routes/home');

//declaring the app object
const app = express();

//configuring ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configuring the middleware express.static
app.use(express.static('./app/public'));
//configuring the middleware bodyparser
app.use(bodyParser.urlencoded({extended: true}));
//configuring the middleware express validator
app.use(expressValidator());

app.use(routes);

/*
//auto loading the routes of the controllers and models
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);
*/
module.exports = app;