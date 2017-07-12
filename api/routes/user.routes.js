const express = require('express');

let router = express.Router();

//just a test this router will call the controller that will call the model
//for database accessing
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;