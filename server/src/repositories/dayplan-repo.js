const dayplanQuery = require('../databases/dayplan-query')

exports.selectDayplanList = (connection, weekplanCode) => {
    return new Promise((resolve, reject)=> {
        connection.query(dayplanQuery.selectDayplanList(), [weekplanCode], (err, results, fields) => {
            if(err){
                console.error(err);
                return reject(err);
            }
            console.log(results);

            resolve(results);

        })
    })
}