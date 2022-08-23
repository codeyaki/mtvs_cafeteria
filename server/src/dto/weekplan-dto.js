const { dateFormat } = require("../utility/date-format");

class WeekplanDTO{
    weekplanCode;
    weekplanNotice;
    weekplanStart;
    weekplanEnd;
    constructor(resultMap) {
        this.weeekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekplanNotice = resultMap.WEEKPLAN_NOTICE;
        this.weekplanStart = dateFormat(resultMap.WEEKPLAN_START);
        this.weekplanEnd = dateFormat(resultMap.WEEKPLAN_END);
    }
    
}