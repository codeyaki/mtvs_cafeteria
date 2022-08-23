const { dateFormat } = require("../../utility/date-format");

class WeekplanResDTO{
    weekplanCode;
    weekplanStart;
    weekplanEnd;
    weekplanNotice;

    constructor(resultMap) {
        this.weeekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekplanStart = dateFormat(new Date(resultMap.WEEK_START));
        this.weekplanEnd = dateFormat(new Date(resultMap.WEEK_END));
        this.weekplanNotice = resultMap.WEEK_NOTICE;
    }
}

module.exports = WeekplanResDTO;