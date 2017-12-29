const dbConnection = require('../../config/database');
const ExpenseDAO = require('../model/ExpenseDAO');
const ObjectId = require('mongodb').ObjectId;


module.exports.getAllExpenses = (req, res) => {
  let expenseDAO = new ExpenseDAO(dbConnection.getDb());
  expenseDAO.getAllExpenses(req, res);
};

module.exports.insertExpenses = (req, res) => {
  let expenseInfo = {
    ownerId: ObjectId(req.params._id), //ObjectId('597feceebf4606bb4b01201b')/*userId._id*/,
    month: parseInt(req.body.month),
    year: parseInt(req.body.year),
    value: - parseFloat(req.body.value),
    description: req.body.description
  };

  let expenseDAO = new ExpenseDAO(dbConnection.getDb());
  expenseDAO.insertExpenses(req, res, expenseInfo);

};

module.exports.updateExpenses = (req, res) => {
  let expenseId = {
    _id: req.params._id //ObjectId('597fee93f7b0ffbbcb03bc0d')
  };
  let updateInfo = req.body;

  let expenseDAO = new ExpenseDAO(dbConnection.getDb());
  expenseDAO.updateExpenses(req, res, expenseId, updateInfo);

};

module.exports.removeExpenses = (req, res) => {
  let expenseId = {
    _id: req.params._id // ObjectId('597fee93f7b0ffbbcb03bc0d')
  };

  let expenseDAO = new ExpenseDAO(dbConnection.getDb());
  expenseDAO.removeExpenses(req, res, expenseId);
};
