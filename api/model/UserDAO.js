function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = function(req, res, userInfo) {

    this._connection.collection('user').find({username: userInfo.username}).toArray((err, users) => {

        if (err){

            return res.status(500).render('index', {
                                                    validation: "",
                                                    ok: "",
                                                    error: err,
                                                    userData: ""
                                                   });

        } else if (users.length !== 0){

            //precondition failed
            return res.status(412).render('index', {
                                                    validation: "", 
                                                    ok: "", 
                                                    error: `This username is already in use.`, 
                                                    userData: ""
                                                   });

        }

        this._connection.collection('user').find({email: userInfo.email}).toArray((err, users) => {

            if (err){

                return res.status(500).render('index', {
                                                        validation: "", 
                                                        ok: "", 
                                                        error: err, 
                                                        userData: ""
                                                       });

            } else if (users.length !== 0){

                //precondition failed
                return res.status(412).render('index', {
                                                        validation: "", 
                                                        ok: "", 
                                                        error: `This email is already in use.`, 
                                                        userData: ""
                                                       });

            }

            this._connection.collection('user').insert(userInfo, (err, result) => {
                
                let username;
                let id;
                
                if (err){

                    return res.status(500).render('error', {
                                                            validation: "",
                                                            ok: "",
                                                            error: err,
                                                            userData: ""
                                                           });

                }

                username = userInfo.username;
                id = result.ops[0]._id;

                return res.status(200).render('index', {
                                                        validation: "",
                                                        ok: `User signed up successfully.`,
                                                        error: "", 
                                                        userData: {id: id, username: username}
                                                       });

            });

        });

    });

}

module.exports = UserDAO;