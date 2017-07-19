const dbConnection = require('../../config/database');
const UserDAO = require('../model/UserDAO');

module.exports.signUp = (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let errors;
    let user;

    req.assert('username','Username can not be empty.').notEmpty();
    req.assert('password', 'Password can not be empty.').notEmpty();
    req.assert('email', 'E-mail can not be empty.').notEmpty();

    errors = req.validationErrors();

    if (errors){
        return res.render('/', {validation: errors, username: username, email: email});
    }

    //calling the model
    user = new UserDAO(dbConnection.getDb());
    user.signUp(req, res, username, password, email);

}