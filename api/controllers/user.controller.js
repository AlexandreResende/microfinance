const dbConnection = require('../../config/database');
const UserDAO = require('../model/UserDAO');

module.exports.signUp = (req, res) => {

    let userInfo = {
                        username: req.body.username,
                        password: req.body.password,
                        email: req.body.email
                    };
    let errors;
    let user;

    req.assert('username','Username can not be empty.').notEmpty();
    req.assert('password', 'Password can not be empty.').notEmpty();
    req.assert('email', 'E-mail can not be empty.').notEmpty();

    errors = req.validationErrors();
    //errors = req.getValidationResult();

    if (errors){
        //for to iterate through the errors
        return res.render('index', {
                                    validation: errors, 
                                    ok: "", 
                                    error: "", 
                                    userData: "",
                                   });
    }

    //calling the model
    user = new UserDAO(dbConnection.getDb());
    user.signUp(req, res, userInfo);

}