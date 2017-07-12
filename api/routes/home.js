const SimulationController = require('../controllers/simulation.controller');
const express = require('express');
const router = express.Router();

router.get('/', SimulationController.home);
router.get('/simulation', SimulationController.simulation);
router.post('/calculate', SimulationController.calculate);

module.exports = router;