function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = function(req, res, userInfo) {

    let userSearch = this._connection.collection('user');
    let username = {
                    username: userInfo.username
                   };
    let email = {
                 email: userInfo.email
                };

    userSearch.find(username).toArray((err, users) => {

        if (err){

            return res.status(500).render('index', {
                                                    validation: ``,
                                                    ok: ``,
                                                    error: err,
                                                    userInfo: ``
                                                   });

        } else if (users.length !== 0){

            //precondition failed
            return res.status(412).render('index', {
                                                    validation: ``, 
                                                    ok: ``, 
                                                    error: `This username is already in use.`, 
                                                    userInfo: ``
                                                   });

        }

        userSearch.find(email).toArray((err, users) => {

            if (err){

                return res.status(500).render('index', {
                                                        validation: ``, 
                                                        ok: ``, 
                                                        error: err, 
                                                        userInfo: ``
                                                       });

            } else if (users.length !== 0){

                //precondition failed
                return res.status(412).render('index', {
                                                        validation: ``, 
                                                        ok: ``, 
                                                        error: `This email is already in use.`, 
                                                        userInfo: ``
                                                       });

            }

            userSearch.insert(userInfo, (err, userInsertResult) => {
                
                let username = userInfo.username;
                let id = userInsertResult.ops[0]._id;
                
                if (err){

                    return res.status(500).render('error', {
                                                            validation: ``,
                                                            ok: ``,
                                                            error: err,
                                                            userInfo: ``
                                                           });

                }

                //resource created
                return res.status(201).render('index', {
                                                        validation: ``,
                                                        ok: `User signed up successfully.`,
                                                        error: ``, 
                                                        userInfo: {id: id, username: username}
                                                        });

            });

        });

    });

}

UserDAO.prototype.authenticate = function(req, res, userInfo){

    let userSearch = this._connection.collection('user');

    userSearch.findOne(userInfo, (err, user) => {

        if (err){

            return res.status(500).render('index', {
                                                    validation: ``,
                                                    ok: ``,
                                                    error: err, 
                                                    userInfo: ``
                                                   });

        } else if (user === null){

            return res.status(404).render('index', {
                                                    validation: ``,
                                                    ok: ``,
                                                    error: `User not found or user does not exist.`, 
                                                    userInfo: ``
                                                   });

        }

        //creating session for a authenticated user
        req.session.authenticated = true;
        req.session.userId = user._id;

        //redirect to the logged page - still dont have it
        return res.status(200).send({ok: `User authenticated`});

    });

}

module.exports = UserDAO;