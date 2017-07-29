const dbConnection = require('../../config/database');
const IncomeDAO = require('../model/incomeDAO');
const ObjectId = require('mongodb').ObjectId;


module.exports.getAllIncomes = (req, res) => {

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.getAllIncomes(req, res);

};

module.exports.insertIncomes = (req, res) => {

    let incomeInfo = {
                  month: paraseInt(req.body.month),
                  year: parseInt(req.body.year),
                  value: parseFloat(req.body.incomeValue),
                  description: req.body. description
                 };


    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.insertIncomes(req, res, incomeInfo);

};

module.exports.updateIncomes = (req, res) => {

    let incomeInfo = {
                      _id: req.params._id
                     };
    let updateInfo = req.body;

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.updateIncomes(req, res, incomeInfo, updateInfo);

};

module.exports.removeIncomes = (req, res) => {

    let incomeInfo = {
                      _id: ObjectId(req.params._id)
                     };

    let incomeDAO = new IncomeDAO(dbConnection.getDb());
    incomeDAO.removeIncomes(req, res, incomeInfo);

};