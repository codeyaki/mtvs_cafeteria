const { dateFormat } = require("../../utility/date-format");

class WeekplanResDTO{
    weekplanCode;
    weekStart;
    weekEnd;
    weekNotice;
    days;

    constructor(resultMap) {
        this.weeekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekStart = dateFormat(new Date(resultMap.WEEK_START));
        this.weekEnd = dateFormat(new Date(resultMap.WEEK_END));
        this.weekNotice = resultMap.WEEK_NOTICE;
    }
    setDays(days){
        this.days = [...days];
}
}

module.exports = WeekplanResDTO;