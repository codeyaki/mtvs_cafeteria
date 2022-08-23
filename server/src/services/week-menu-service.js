const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        console.log('service : ');
        console.log(requestEntity);
        const connection = getConnection();
        let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}
        resultEntity.count = await WeekPlanRepository.countWeekPlan(connection);
        resultEntity.results.weekplan = await WeekPlanRepository.selectWeekPlan(connection, requestEntity);
        connection.end();
        resolve(resultEntity);
    })
}