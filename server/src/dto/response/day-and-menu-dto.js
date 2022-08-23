const { dateFormat } = require("../../utility/date-format");


class DayplanAndMenuDTO{
    dayplanCode;
    amPm;
    date;
    menuDTO;

    setDayplan(resultMap){
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.amPm = resultMap.AMPM;
        this.date = dateFormat(resultMap.DATE);
}

    setMenu(menuDTO){
        this.menuDTO = [...menuDTO];
    }

}

module.exports = DayplanAndMenuDTO;