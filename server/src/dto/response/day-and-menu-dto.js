class DayplanAndMenuDTO{
    dayplanCode;
    weekplanCode;
    amPm;
    date;
    // menu = [5]
    constructor(resultMap) {
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.weekplanCode = resultMap.WEEKPLAN_CODE;
        this.amPm = resultMap.amPm;
        this.date = resultMap.date;
    }
    
}

module.exports = DayplanDTO;