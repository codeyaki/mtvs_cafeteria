const getConnection = require('../databases/connection');
const WeekMenuRepository = require('../repositories/week-menu-repo');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        const results = await WeekMenuRepository.selectWeekMenuList(requestEntity);
        connection.end();
        resolve(results);
    })
}