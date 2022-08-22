const getConnection = require('../databases/connection');
const WeekMenuRepository = require('../repositories/week-menu-repo');

exports.selectWeekMenuList = () => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        const results = await WeekMenuRepository.selectWeekMenuList();
        connection.end();
        resolve(results);
    })
}