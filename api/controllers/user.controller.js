const dbConnection = require('../../config/database');
const UserDAO = require('../model/UserDAO');

module.exports.signUp = (req, res) => {

    let userInfo = {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    incomes: [],
                    expenses: []
                    };
    let errors;
    let user;

    req.assert('username','Username can not be empty.').notEmpty();
    req.assert('password', 'Password can not be empty.').notEmpty();
    req.assert('email', 'E-mail can not be empty.').notEmpty();

    errors = req.validationErrors();
    //change error handling to new getValidationResult
    //errors = req.getValidationResult();

    if (errors){
        //for to iterate through the errors
        return res.render('index', {
                                    validation: errors, 
                                    ok: "", 
                                    error: "", 
                                    userInfo: "",
                                   });
    }

    //calling the model
    user = new UserDAO(dbConnection.getDb());
    user.signUp(req, res, userInfo);

}

module.exports.authenticate = (req, res) => {

    let userInfo = {
                    username: req.body.username,
                    password: req.body.password
                   };
    let user;
    let errors;

    req.assert('username', 'Username can not be empty.');
    req.assert('password', 'Password can not be empty.');

    //errors = req.ValidationErrors();
    //change error handling to new getValidationResult
    //errors = req.getValidationResult();

    if (errors){

        return res.render('index', {
                                    validation: errors,
                                    ok: "",
                                    error: "",
                                    userInfo: ""
                                   });

    }

    user = new UserDAO(dbConnection.getDb());
    user.authenticate(req, res, userInfo);

};