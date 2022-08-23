const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');
const dayplanAndMenuRepository = require('../repositories/dayplan-and-menu-repo');
const WeekplanDTO = require('../dto/single/weekplan-dto');
const WeekAndDayAndMenuDTO = require('../dto/join/week-and-day-and-menu-dto');


exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        // let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}

        // 모든 주간 식단표의 개수 쿼라
        const count = await WeekPlanRepository.countWeekPlan(connection);
        const weekplanResul = new WeekplanDTO(await WeekPlanRepository.selectWeekPlan(connection, requestEntity));
        // const dayplanResult
        // const dayplanAndMenuResults = await dayplanAndMenuRepository.selectDayplanAndMenu(connection, weekplanResults.weekplanCode);
        console.log(weekplanResults);

        
        connection.end();

        

        resolve(weekplanResults);
    })
}