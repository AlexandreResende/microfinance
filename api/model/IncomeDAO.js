const ObjectId = require('mongodb').ObjectId;

function IncomeDAO(connection){

    this._connection = connection;

}

IncomeDAO.prototype.getAllIncomes = function(req, res){

    let userId = {
                  ownerId: ObjectId('597fccdb5623c9b346c275fd')//req.session.userId
                 };

    let incomesColl = this._connection.collection('incomes');

    incomesColl.find(userId).toArray((err, userIncomesResult) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Returned all incomes successfully`, result: userIncomesResult});

    });

}

IncomeDAO.prototype.insertIncomes = function(req, res, incomeInfo){

    let incomesColl = this._connection.collection('incomes'); 

    incomesColl.insert(incomeInfo, (err, insertResult) => {

        if (err){

            return es.status(500).render('home', {error: `An error occurred. ${err}`});

        }

        return res.status(201).render('home', {msg: `Income inserted`, result: insertResult.ops[0]});

    });   

}

IncomeDAO.prototype.updateIncomes = function(req, res, incomeId, updateInfo){

    let incomesColl = this._connection.collection('incomes');

    incomesColl.update(incomeId, {$set: updateInfo}, (err, updateResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(200).send({msg: `Income updated`, result: updateResult});

    });

}

IncomeDAO.prototype.removeIncomes = function(req, res, incomeId){

    let incomesColl = this._connection.collection('incomes');

    incomesColl.remove(incomeId, (err, removeResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(200).send({msg: `Income updated`, result: removeResult});

    });

}

IncomeDAO.prototype.getIncomesCurrentMonth = function(req, res){

    const date = new Date();
    const month = date.getMonth() + 1; //getMonth starts at 0
    const year = date.getFullYear();

    let searchObj = {
                     month: month,
                     year: year
                    };

    let incomesColl = this._connection.collection('incomes');

    incomesColl.find(searchObj).toArray((err, findResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(200).send({result: findResult});

    });

}
module.exports = IncomeDAO;