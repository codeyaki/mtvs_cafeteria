
exports.selectMenuPlanList = () => {
    return `
        SELECT
               *
          FROM TBL_DAYPLAN A
          JOIN TBL_MENUPLAN B ON(A.DAYPLAN_CODE = B.DAYPLAN_CODE)
          JOIN TBL_MENU C ON(B.MENU_CODE = C.MENU_CODE)
         WHERE A.DATE = ?
           AND A.AMPM = ?
    `
}

exports.selectWeekPlan = () => {
    return `
        SELECT
               *
          FROM TBL_WEEKPLAN A
         ORDER BY A.WEEK_END DESC
         LIMIT ?
        OFFSET ?
    `;

}