const weekPlanQuery = require('../databases/week-plan-query');
const WeekplanDTO = require('../dto/single/weekplan-dto');

exports.selectWeekPlan = (connection, requestEntity) => {
    return new Promise((resolve, reject) => {
        connection.query(weekPlanQuery.selectWeekPlan(), [requestEntity.limit, requestEntity.offset], (err, results, fields) => {
            if(err){
                console.log('err : ', err);
                return reject(err);
            }
            // const weekplanDTO = new WeekplanDTO(results);
            resolve(results[0]);
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