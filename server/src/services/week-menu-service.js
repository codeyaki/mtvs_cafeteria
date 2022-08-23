const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');
const WeekplanResDTO = require('../dto/single/response/weekplan-res-dto');
const DayplanRepostitory = require('../repositories/dayplan-repo')

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        // let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}

        
        const count = await WeekPlanRepository.countWeekplan(connection);
        // 주간 계획 관련 정보 조회
        const weekplanResult = new WeekplanResDTO(await WeekPlanRepository.selectWeekplan(connection, requestEntity));
        // 주간을 토대로 일간 메뉴 정보 리스트 조회
        const dayplanResultList = await DayplanRepostitory.selectDayplanList(connection,weekplanResult.weeekplanCode)
        dayplanResultList.map(dayplan => {
            console.log(dayplan)
            
        });


        
        

        
        connection.end();

        

        resolve(weekplanResult);
    })
}