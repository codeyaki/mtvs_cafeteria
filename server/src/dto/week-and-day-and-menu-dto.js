const { dateFormat } = require("../utility/date-format");
const DayplanDTO = require("./dayplan-dto");
const MenuDTO = require("./menu-dto");

class WeekAndDayAndMenuDTO{
    weekplanCode;
    weekplanNotice;
    weekplanStart;
    weekplanEnd;
    dayplan = new DayplanDTO();
    menu = new MenuDTO();
    constructor(resultMap) {
        this.weeekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekplanNotice = resultMap.WEEKPLAN_NOTICE;
        this.weekplanStart = dateFormat(resultMap.WEEKPLAN_START);
        this.weekplanEnd = dateFormat(resultMap.WEEKPLAN_END);
        this.dayplan = resultMap.dayplan;
        this.menu = resultMap.menu;
    }
    
}

module.exports = WeekAndDayAndMenuDTO;