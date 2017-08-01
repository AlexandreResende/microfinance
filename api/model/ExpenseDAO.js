const ObjectId = require('mongodb').ObjectId;

function ExpenseDAO(connection){

    this._connection = connection;

}

ExpenseDAO.prototype.getAllExpenses = function(req, res){

    let userId = {
                  ownerId: ObjectId('597fccdb5623c9b346c275fd')//req.session.userId
                 };

    let expensesColl = this._connection.collection('expenses');

    expensesColl.find(userId).toArray((err, userExpensesResult) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the Expenses by year and month
        res.status(200).send({msg: `Returned all Expenses successfully`, result: userExpensesResult});

    });

}

ExpenseDAO.prototype.insertExpenses = function(req, res, userId, expenseInfo){

    let expensesColl = this._connection.collection('expenses'); 

    expensesColl.insert(expenseInfo, (err, insertResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(201).send({msg: `Expense inserted`, result: insertResult.ops[0]});

    });   

}

ExpenseDAO.prototype.updateExpenses = function(req, res, ExpenseId, updateInfo){

    let expensesColl = this._connection.collection('expenses');

    expensesColl.update(ExpenseId, {$set: updateInfo}, (err, updateResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(200).send({msg: `Expense updated`, result: updateResult});

    });

}

ExpenseDAO.prototype.removeExpenses = function(req, res, ExpenseId){

    let expensesColl = this._connection.collection('expenses');

    expensesColl.remove(ExpenseId, (err, removeResult) => {

        if (err){

            return es.status(500).send({error: `An error occurred. ${err}`});

        }

        return res.status(200).send({msg: `Expense removed`, result: removeResult});

    });

}

module.exports = ExpenseDAO;