const { dateFormat } = require("../../utility/date-format");


class DayplanAndMenuDTO{
    dayplanCode;
    amPm;
    date;
    menu;

    setDayplan(resultMap){
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.amPm = resultMap.AMPM;
        this.date = dateFormat(resultMap.DATE);
}

    setMenu(menu){
        this.menu = [...menu];
    }

}

module.exports = DayplanAndMenuDTO;