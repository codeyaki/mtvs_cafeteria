const { dateFormat } = require("../../utility/date-format");

class WeekAndDayAndMenuDTO{
    weekplanCode;
    weekNotice;
    weekStart;
    weekEnd;
    dayplanAndMenuDTO;
    constructor() {
        
    }
    setWeekplan(resultMap){
        this.weekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekNotice = resultMap.WEEK_NOTICE;
        this.weekStart =  dateFormat(resultMap.WEEK_START);
        this.weekEnd =  dateFormat(resultMap.WEEK_END);
    }
    setdayplanAndMenuDTO(dayplanAndMenuDTO){
            this.dayplanAndMenuDTO = dayplanAndMenuDTO;
    }
}

module.exports = WeekAndDayAndMenuDTO;