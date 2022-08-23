const getConnection = require('../databases/connection');
const WeekMenuRepository = require('../repositories/week-menu-repo');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        console.log('service : ');
        console.log(requestEntity);
        const connection = getConnection();
        let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}
        resultEntity.count = await WeekMenuRepository.countWeekPlan(connection);
        resultEntity.results.weekplan = await WeekMenuRepository.selectWeekMenuList(connection, requestEntity);
        connection.end();
        resolve(resultEntity);
    })
}