//user controller
//importar db connection
const UserDAO = require('../model/UserDAO');

module.exports.signUp = (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let errors;
    let user;

    req.assert('','').notEmpty();
    req.assert('', '').notEmpty();
    req.assert('', '').notEmpty();

    errors = req.validationErrors();

    if (errors){
        return res.render('/', {validation: errors, username: username, email: email});
    }

    //calling the model
    //user = new UserDAO(dbConnection);
    //user.signUp(req, res, username, password, email);

}