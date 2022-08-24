const { dateFormat } = require("../../utility/date-format");

class WeekResDTO{
    weekplanCode;
    weekNotice;
    weekStart;
    weekEnd;
    days;
    constructor(resultMap){
        this.weekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekNotice = resultMap.WEEK_NOTICE;
        this.weekStart =  dateFormat(resultMap.WEEK_START);
        this.weekEnd =  dateFormat(resultMap.WEEK_END);
    }
    setDays(days){
            this.days = days;
    }
}

module.exports = WeekResDTO;