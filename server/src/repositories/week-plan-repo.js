const weekMenuQuery = require('../databases/week-plan-query.js');

exports.countWeekPlan = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(weekMenuQuery.countWeekPlan(), (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            resolve(results[0]['COUNT(*)']);
        })
    })
}