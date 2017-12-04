
const path = require('path');
const express = require('express');
const router = express.Router();

const homeController = require(__dirname + '/../controllers/home.controller');

router.get('/dashboard', homeController.home);

module.exports = router;