function UserDAO(connection) {

    this._connection = connection;

}

UserDAO.prototype.signUp = function(req, res, userInfo) {

    let isUsernameRegistered;
    let isEmailRegistered;
    let userSearch = this._connection.collection('user');
    let username = {
        username: userInfo.username
    };
    let email = {
        email: userInfo.email
    };

    isUsernameRegistered = new Promise((resolve, reject) => {

        userSearch.findOne(username, (err, userResult) => {
            
            if (err || userResult !== null){
    
                reject(`Username already being used.`);

            }

            resolve();

        });

    });

    isEmailRegistered = new Promise((resolve, reject) => {

        userSearch.findOne(email, (err, emailResult) => {
            
            if (err || emailResult !== null){
    
                reject(`Email already being used.`);

            }

            resolve();

        });

    });

    Promise
    .all([isUsernameRegistered, isEmailRegistered])
    .then((values) => {

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

    })
    .catch((err) => {

        return res.status(500).render('error', {
            validation: ``,
            ok: ``,
            error: err,
            userInfo: ``
        });

    });

}

UserDAO.prototype.authenticate = function(req, res, userInfo){

    let isUserRegistered;
    let userSearch = this._connection.collection('user');

    isUserRegistered = new Promise((resolve, reject) => {

        userSearch.findOne(userInfo, (err, userResult) => {
            
            if (err){
    
                reject(err);
    
            } else if (userResult === null){
    
                reject(`User not found or user does not exist.`);
    
            }
    
            resolve(userResult);
    
        });

    });

    isUserRegistered
    .then((user) => {

        console.log(user);

        //creating session for a authenticated user
        req.session.authenticated = true;
        req.session.userId = user._id; 

        //redirect to the logged page - still dont have it
        return res.status(200).render('home', {ok: `User authenticated`});

    })
    .catch((err) => {

        return res.status(404).render('index', {
            validation: ``,
            ok: ``,
            error: `${err}`, 
            userInfo: ``
        });

    });

}

module.exports = UserDAO;