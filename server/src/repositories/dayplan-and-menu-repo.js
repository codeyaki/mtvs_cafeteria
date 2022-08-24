const dayplanAndMenuQuery = require('../databases/join-query');


exports.selectDayplanAndMenu = (connection, weekplanCode) => {
    return new Promise((resolve, reject) => {
        connection.query(dayplanAndMenuQuery.selectDayplanAndMenuPlanAndMenu(), [weekplanCode], (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            console.log(results);

        })
    });

}