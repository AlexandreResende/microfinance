
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const consign = require("consign");

//declaring the app object
var app = express();

//configuring ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configuring the middleware express.static
app.use(express.static('./app/public'));
//configuring the middleware bodyparser
app.use(bodyParser.urlencoded({extended: true}));
//configuring the middleware express validator
app.use(expressValidator());

//auto loading the routes of the controllers and models
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;