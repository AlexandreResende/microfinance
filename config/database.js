const mongoose = require('mongoose');

let connection = mongoose.connect('mongodb://localhost:27017/microfinance');

module.exports = () => {
    console.log('CONNECTION!!! ' + connection);
    return connection;
};