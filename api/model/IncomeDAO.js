const ObjectId = require('mongodb').ObjectId;

function IncomeDAO(connection){

    this._connection = connection;

}

IncomeDAO.prototype.getAllIncomes = function(req, res){

    let userId = {
                  _id: ObjectId('597f6ae0ed65aaa2c1425c9d')//req.session.userId
                 };

    let userSearch = this._connection.collection('user');

    userSearch.findOne(userId, (err, userResult) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Returned all incomes successfully`, result: userResult.incomes});

    });

}

IncomeDAO.prototype.insertIncomes = function(req, res, incomeInfo){

    let userId = {
                  _id: ObjectId('597f6ae0ed65aaa2c1425c9d')//req.session.userId
                 };

    let userSearch = this._connection.collection('user');

    userSearch.update(userId, {'$push': {incomes: incomeInfo}}, (err, insertResult) => {

        if (err){

            res.status(500).send({error: `An error occurred. ${err}`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Income inserted.`, result: insertResult});

    });

}

IncomeDAO.prototype.updateIncomes = function(req, res, incomeInfo, updateInfo){

    let incomeSearch = this._connection.collection('income');

    incomeSearch.update(incomeInfo, updateInfo, (err, updateResult) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Income updated`, result: updateResult});

    });

}

IncomeDAO.prototype.removeIncomes = function(req, res, incomeInfo){

    let incomeSearch = this._connection.collection('income');

    incomeSearch.remove(incomeInfo, (err, removeResult) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Income removed.`, result: removeResult});

    });

}

module.exports = IncomeDAO;