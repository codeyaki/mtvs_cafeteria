const weekplanQuery = require('../databases/weekplan-query');

exports.selectWeekplan = (connection, requestEntity) => {
    return new Promise((resolve, reject) => {
        connection.query(weekplanQuery.selectWeekplan(), [requestEntity.limit, requestEntity.offset], (err, results, fields) => {
            if(err){
                console.log('err : ', err);
                return reject(err);
            }
            resolve(results[0]);
        })
    })
}

exports.countWeekplan = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(weekplanQuery.countWeekplan(), (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            resolve(results[0]['COUNT(*)']);
        })
    })
}