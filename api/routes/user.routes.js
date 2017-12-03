const express = require('express');
const userController = require('../controllers/user.controller');

let router = express.Router();

//just a test this router will call the controller that will call the model
//for database accessing
router.get('/', (req, res) => {
    res.render('index', {
        validation: "", 
        ok: "", 
        error: "", 
        userInfo: ""
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('registro');
});

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;