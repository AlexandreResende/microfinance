const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/income.controller');

router.get('/incomes', incomeController.getAllIncomes);

router.put('/incomes', incomeController.insertIncomes);

router.delete('/incomes', incomeController.removeIncomes);

router.put('/editIncomes', incomeController.updateIncomes);


module.exports = router;