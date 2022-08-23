exports.selectDayplanAndMenuPlanAndMenu = () => {
    return `
        SELECT 
               *
          FROM (SELECT
                       A.WEEKPLAN_CODE
                  FROM TBL_WEEKPLAN A
                 WHERE A.WEEKCODE = ?
                )
          JOIN TBL_DAYPLAN B ON(A.WEEK_CODE = B.WEEK_CODE)
          JOIN TBL_MENUPLAN C ON(B.WEEK_CODE = C.WEEK_CODE)
    `
}

exports.selectDayplanMenuList = () => {
    return `
        SELECT
               *
          FROM TBL_DAYPLAN A
          JOIN TBL_MENUPLAN B ON(? = B.DAYPLAN_CODE)
          JOIN TBL_MENU C ON(B.MENU_CODE = C.MENU_CODE)
    `;

}