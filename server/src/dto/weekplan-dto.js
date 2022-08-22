class WeekplanDTO{
    weekplanCode;
    weekplanNotice;
    weekplanStart;
    weekplanEnd;
    constructor(resultMap) {
        this.weeekplanCode = resultMap.WEEKPLAN_CODE;
        this.weekplanNotice = resultMap.WEEKPLAN_NOTICE;
        this.weekplanStart = resultMap.WEEKPLAN_START;
        this.weekplanEnd = resultMap.WEEKPLAN_END;
    }
    
}