const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');
const DayplanRepository = require('../repositories/dayplan-repo');
const DayplanMenuRepository = require('../repositories/menu-dayplan-repo.js');
const MenuResDTO = require('../dto/response/menu-res-dto');
const WeekplanResDTO = require('../dto/response/weekplan-res-dto');
const DayplanResDTO = require('../dto/response/dayplan-res-dto');

exports.selectWeekMenuList = async (requestEntity) => {
    const connection = getConnection();
    // 모든 주간 레코드 개수
    const count = await WeekPlanRepository.countWeekplan(connection);
    // 주간 계획 관련 정보 조회
    const weekplanResult = await WeekPlanRepository.selectWeekplan(connection, requestEntity);
    // 주간을 토대로 일간 메뉴 정보 리스트 조회
    const dayplanResultList = await DayplanRepository.selectDayplanList(connection,weekplanResult.WEEKPLAN_CODE);
    let dayplanList = [];
    // 주에 몇번의 식사가 있는지 조회
    for (let i = 0; i < dayplanResultList.length; i++){
        const menuAndDayplanResultList = await DayplanMenuRepository.selectDayplanMenuList(connection, dayplanResultList[i]);
        let dayplan = new DayplanResDTO(dayplanResultList[i]);
        let menuList = [];
        // 한번의 식사에 제공되는 메뉴 조회
        for(let j = 0; j < menuAndDayplanResultList.length; j++){
            let menuResDTO = new MenuResDTO(menuAndDayplanResultList[j]);
            menuList.push(menuResDTO);
        }
        dayplan.setMenuList(menuList);
        dayplanList.push({...dayplan});
    }
    let weekplan = new WeekplanResDTO(weekplanResult);
    weekplan.setDays(dayplanList);
    connection.end();
    return ({count: count, results: weekplan});
}