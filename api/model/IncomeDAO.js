function IncomeDAO(connection){

    this._connection = connection;

}

/**
 * GET THE USER ID FROM THE SESSION AND FIND THE INCOMES
 * THAT BELONG TO HIM THE SCHEMA OF THE INCOMES CAN BE:
 * --------------------------------------------------------------------
 * {_ID, OWNERID, INCOMES[]} - INCOME WILL BE AN ARRAY OF OBJECTS
 * 
 * OR
 * 
 * {_ID, OWNERID, INCOME} - EACH INCOME WILL BE A SINGLE REGISTER
 * --------------------------------------------------------------------
 * THE LAST ONE SEEMS TO BE THE BEST ANSWER IN A WAY THAT WE WILL NOT
 * NEED TO LOOK IN THE ARRAY FOR THE ELEMENT...
 * 
 * THINK ABOUT MORE CAREFULLY...
 * 
 * THE INCOMES CAN BE ASSOCIATED WITH THE USER
 * MEANING IN THE SAME SCHEMA...
 * 
 * OR SEPARATED...
 * 
 * IF SEPARATED WE WILL HAVE TO CREATE AN INCOME AND DEBT
 * DOCUMENT FOR THE USER WHEN THE USER IS CREATED TO KEEP
 * TRACK OF ITS FINANCES
 */


IncomeDAO.prototype.getAllIncomes = function(req, res){

    let incomeSearch = this._connection.collection('income');

    incomeSearch.find({}).toArray( (err, allIncomes) => {

        if (err){

            res.status(500).send({error: `An error occurred.`});

        }

        //create a function to sort the incomes by year and month
        res.status(200).send({msg: `Returned all incomes successfully`, result: allIncomes});

    });

}

IncomeDAO.prototype.insertIncomes = function(req, res, incomeInfo){

    let incomeSearch = this._connection.collection('income');

    incomeSearch.insert(incomeInfo, (err, insertResult) => {

        console.log(insertResult);

        if (err){

            res.status(500).send({error: `An error occurred.`});

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