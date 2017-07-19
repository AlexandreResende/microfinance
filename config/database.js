const mongoose = require('mongoose');

let exportDatabaseConnection = () => {

    let connection = mongoose.connect('mongodb://localhost:27017/microfinance', {useMongoClient: true});

    return connection;
}



module.exports = () => {
    console.log('CONNECTION!!! ' + connection);
    return exportDatabaseConnection;
};