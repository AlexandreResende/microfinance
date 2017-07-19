function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = function(req, res, username, password, email) {

    let userData = {username, password, email}

    this._connection.collection('user').insert(userData, (err, result) => {
            if (err){
                return res.send({error: err});
            }
            return res.send({ok: 'ok'});
    });

}

module.exports = UserDAO;