function UserDAO(connection) {

    this._connection = connection();

}

UserDAO.prototype.signUp = (req, res, username, password, email) => {

    console.log('THIS CONNECTION: ' + this._connection);

    res.send({msg: 'Signing up someone!!!'});

}

module.exports = UserDAO;