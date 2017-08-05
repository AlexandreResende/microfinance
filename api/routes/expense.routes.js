const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expense.controller');

router.get('/expenses', expenseController.getAllExpenses);

router.post('/expenses', expenseController.insertExpenses);

router.delete('/expenses', expenseController.removeExpenses);

router.put('/expenses', expenseController.updateExpenses);


module.exports = router;