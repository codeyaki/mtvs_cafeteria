const weekMenuQuery = require('../databases/week-menu-query.js');
const WeekMenuDTO = require('../dto/week-menu-dto');

exports.selectWeekMenuList = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(weekMenuQuery.selectWeekMenuList(), (err, results, fields) => {
            if(err){
                console.log('err : ', err);
                return reject(err);
            }
            console.log(results);

        })
    })
}