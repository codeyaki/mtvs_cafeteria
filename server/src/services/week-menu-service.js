const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');
const DayplanRepository = require('../repositories/dayplan-repo');
const DayplanMenuRepository = require('../repositories/menu-dayplan-repo.js');
const WeekplanResDTO = require('../dto/response/weekplan-res-dto');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        // let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}

        
        const count = await WeekPlanRepository.countWeekplan(connection);
        // 주간 계획 관련 정보 조회
        const weekplanResult = await WeekPlanRepository.selectWeekplan(connection, requestEntity);
        // 주간을 토대로 일간 메뉴 정보 리스트 조회
        const dayplanResultList = await DayplanRepository.selectDayplanList(connection,weekplanResult.WEEKPLAN_CODE);
        await dayplanResultList.map( async (dayplan) => {
            const menuDayplanResultList = await DayplanMenuRepository.selectDayplanMenuList(connection, dayplan.DAYPLAN_CODE);
            console.log(menuDayplanResultList);
            
        });


        
        

        
        connection.end();

        

        resolve(weekplanResult);
    })
}