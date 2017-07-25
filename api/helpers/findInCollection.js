module.exports = (connection, collection, info) => {

    return new Promise( (resolve, reject) => {

        connection.collection(collection).find({}, (err, result) => {

            if (err){
                reject(err);
            }

            console.log(result.ops);

            resolve(result.ops);

        });

    });

}