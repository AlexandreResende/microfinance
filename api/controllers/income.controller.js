const dbConnection = require('../../config/database');
const IncomeDAO = require('../model/incomeDAO');
const ObjectId = require('mongodb').ObjectId;


module.exports.getAllIncomes = (req, res) => {

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.getAllIncomes(req, res);

};

module.exports.insertIncomes = (req, res) => {

    let userId = {
                  _id: ObjectId('597feceebf4606bb4b01201b')//req.session.userId
                 };

    let incomeInfo = {
                      ownerId: ObjectId('597feceebf4606bb4b01201b')/*userId._id*/,
                      month: parseInt(req.body.month),
                      year: parseInt(req.body.year),
                      value: parseFloat(req.body.value),
                      description: req.body.description
                     };


    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.insertIncomes(req, res, userId, incomeInfo);

};

module.exports.updateIncomes = (req, res) => {

    let incomeId = {
                    _id: ObjectId('597fee93f7b0ffbbcb03bc0d')//req.params._id
                   };
    let updateInfo = req.body;

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.updateIncomes(req, res, incomeId, updateInfo);

};

module.exports.removeIncomes = (req, res) => {

    let incomeId = {
                      _id: ObjectId('597fee93f7b0ffbbcb03bc0d')//req.params._id
                     };

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.removeIncomes(req, res, incomeId);

};