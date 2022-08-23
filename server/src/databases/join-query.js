exports.selectDayplanAndMenuPlanAndMenu = () => {
    return `
        SELECT *
          FROM (SELECT
                       A.WEEKPLAN_CODE
                  FROM TBL_WEEKPLAN A
                 WHERE A.WEEKCODE = ?
                )
          JOIN TBL_DAYPLAN B ON(A.WEEK_CODE = B.WEEK_CODE)
          JOIN TBL_MENUPLAN C ON(B.WEEK_CODE = C.WEEK_CODE)
    `
}