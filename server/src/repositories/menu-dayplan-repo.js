const joinQuery = require('../databases/join-query')


exports.selectDayplanMenuList = (connection, dayplanCode) => {
    return new Promise((resolve, reject)=>{
        connection.query(joinQuery.selectDayplanMenuList(), [dayplanCode], (err, results, fields) => {
            if(err){
                console.error(err);
                reject(err);
            }

            resolve(results);
        });
    });

};