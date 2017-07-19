const express = require('express');
const userController = require('../controllers/user.controller');

let router = express.Router();

//just a test this router will call the controller that will call the model
//for database accessing
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/signUp', userController.signUp);

module.exports = router;