function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = function(req, res, userInfo) {

    /*
        VERIFICAR SE TANTO USUARIO E O EMAIL JA EXISTEM NO BANCO ANTES
        DE FAZER A INSERCAO DO MESMO, PARA QUE DESSA MANEIRA NAO TENHANHOS
        CONTAS COM O MESMO EMAIL E TBM DIFERENTES USUARIOS COM O MESMO LOGIN
    */

    this._connection.collection('user').insert(userInfo, (err, result) => {
            
            let username;
            let id;
            
            if (err){
                return res.send({error: err});
            }

            username = userInfo.username;
            id = result.ops[0]._id;

            return res.send({ok: `User signed up successfully.`, username: username, id: id});
    });

}

module.exports = UserDAO;