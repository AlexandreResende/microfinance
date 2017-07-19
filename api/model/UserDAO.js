function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = (req, res, username, password, email) => {

    res.send('Signing up someone!!!');

}