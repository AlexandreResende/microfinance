const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/income.controller');

router.get('/income', incomeController.getAllIncomes);

router.post('/income', incomeController.insertIncome);

router.put('/income/:incomeId', incomeController.updateIncome);

router.delete('/income/:incomeId', incomeController.removeIncome);

module.exports = router;