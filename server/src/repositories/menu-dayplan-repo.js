const joinQuery = require('../databases/join-query')


exports.selectDayplanMenuList = (connection, dayplanCode) => {
    return new Promise((resolve, reject)=>{
        connection.query(joinQuery.selectDayplanMenuList(), [dayplanCode.DAYPLAN_CODE, dayplanCode.AMPM], (err, results, fields) => {
            if(err){
                console.error(err);
                return reject(err);
            }

            resolve(results);
        });
    });

};