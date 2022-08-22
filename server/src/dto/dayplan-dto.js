class DayplanDTO{
    dayplanCode;
    weekplanCode;
    amPm;
    date;
    constructor(resultMap) {
        this.dayplanCode = resultMap.DAYPLAN_CODE;
        this.weekplanCode = resultMap.WEEKPLAN_CODE;
        this.amPm = resultMap.amPm;
        this.date = resultMap.date;
    }
    
}