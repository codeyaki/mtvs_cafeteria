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
               C.MENU_CODE
             , C.MENU_NAME
             , D.CATEGORY_CODE
             , D.CATEGORY_NAME
          FROM TBL_DAYPLAN A
          JOIN TBL_MENUPLAN B ON(A.DAYPLAN_CODE = B.DAYPLAN_CODE)
          JOIN TBL_MENU C ON(B.MENU_CODE = C.MENU_CODE)
          JOIN TBL_CATEGORY D ON(C.CATEGORY_CODE = D.CATEGORY_CODE)
         WHERE A.DAYPLAN_CODE = ?
           AND A.AMPM = ?
    `;   

}

exports.selectMenuplanJoinMenuJoinCategory = () => {
    return `
        SELECT
               *
          FROM TBL_MENUPLAN A
         WHERE A.DAYPLAN_CODE = (SELECT B.DAYPLAN_CODE
                                   FROM TBL_DAYPLAN_CODE
                                  WHERE B.DAYPLAN_CODE = ?
                                )
          JOIN 
    `;
}