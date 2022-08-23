const weekPlanQuery = require('../databases/week-plan-query');

exports.selectWeekPlan = (connection, requestEntity) => {
    return new Promise((resolve, reject) => {
        console.log('repo : ');
        console.log(requestEntity);
        connection.query(weekPlanQuery.selectWeekPlan(), [requestEntity.limit, requestEntity.offset], (err, results, fields) => {
            if(err){
                console.log('err : ', err);
                return reject(err);
            }
            console.log(results);
            
            resolve(results);
        })
    })
}

exports.countWeekPlan = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(weekPlanQuery.countWeekPlan(), (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            resolve(results[0]['COUNT(*)']);
        })
    })
}