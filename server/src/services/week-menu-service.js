const getConnection = require('../databases/connection');
const WeekMenuRepository = require('../repositories/week-menu-repo');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        console.log('service : ');
        console.log(requestEntity);
        const connection = getConnection();
        const rowCount = await WeekMenuRepository.countWeekPlan(connection);
        const weekPlanResult = await WeekMenuRepository.selectWeekMenuList(connection, requestEntity);
        results = {};
        connection.end();
        resolve(results);
    })
}