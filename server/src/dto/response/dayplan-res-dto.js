const { dateFormat } = require("../../utility/date-format");


class DayplanResDTO{
    dayplanCode;
    amPm;
    date;
    menuList;
    constructor(resultMap) {
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.amPm = resultMap.AMPM;
        this.date = dateFormat{resultMap.DATE};
    }
    setMenuList(menuList){
        this.menuList = [...menuList];
    }
}

module.exports = DayplanResDTO;