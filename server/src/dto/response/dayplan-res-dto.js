class DayplanResDTO{
    dayplanCode;
    amPm;
    date;
    menuList;
    constructor(resultMap) {
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.amPm = resultMap.amPm;
        this.date = resultMap.date;
    }
    setMenuList(menuList){
        this.menuList = [...menuList];
    }
}

module.exports = DayplanResDTO;