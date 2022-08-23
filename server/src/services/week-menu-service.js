const getConnection = require('../databases/connection');
const WeekPlanRepository = require('../repositories/week-plan-repo');
const DayplanRepository = require('../repositories/dayplan-repo');
const DayplanMenuRepository = require('../repositories/menu-dayplan-repo.js');
const WeekplanResDTO = require('../dto/response/weekplan-res-dto');
const WeekAndDayAndMenuDTO = require('../dto/response/week-and-day-and-menu-dto');
const MenuResDTO = require('../dto/response/menu-res-dto');
const DayplanAndMenuDTO = require('../dto/response/day-and-menu-dto');

exports.selectWeekMenuList = (requestEntity) => {
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        // let resultEntity = {count:0, results:{weekplan:{}, dayAndmenu:{}}}

        // 모든 주간 레코드 개수
        const count = await WeekPlanRepository.countWeekplan(connection);
        // 주간 계획 관련 정보 조회
        const weekplanResult = await WeekPlanRepository.selectWeekplan(connection, requestEntity);
        if(!weekplanResult){
            return resolve({count:count, results:null})
        }
        let weekAndDayAndMenuDTO = new WeekAndDayAndMenuDTO();
        weekAndDayAndMenuDTO.setWeekplan(weekplanResult);

        // 주간을 토대로 일간 메뉴 정보 리스트 조회
        const dayplanResultList = await DayplanRepository.selectDayplanList(connection,weekplanResult.WEEKPLAN_CODE);
        let dayplanList = [];
        for (let i = 0; i < dayplanResultList.length; i++){
            let dayAndMenuDTO = new DayplanAndMenuDTO();
            dayAndMenuDTO.setDayplan(dayplanResultList[i]);
            const menuAndDayplanResultList = await DayplanMenuRepository.selectDayplanMenuList(connection, dayplanResultList[i]);
            let menuList = [];
            for(let j = 0; j < menuAndDayplanResultList.length; j++){
                let menuResDTO = new MenuResDTO();
                menuResDTO.setMenuCode(menuAndDayplanResultList[j].MENU_CODE);
                menuResDTO.setMenuName(menuAndDayplanResultList[j].MENU_NAME);
                menuResDTO.setCategoryCode(menuAndDayplanResultList[j].CATEGORY_CODE);
                menuList.push(menuResDTO);
            }
            dayAndMenuDTO.setMenu(menuList);
            dayplanList.push({...dayAndMenuDTO});

        }
        console.log(dayplanList);
        weekAndDayAndMenuDTO.setdayplanAndMenuDTO(dayplanList);
        connection.end();

        resDTO = {
            count: count,
            results: weekAndDayAndMenuDTO
        }
        resolve(resDTO);
    })
}