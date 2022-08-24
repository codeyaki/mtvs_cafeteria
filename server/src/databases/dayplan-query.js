

exports.selectDayplanList = () => {
    return`
        SELECT 
               *
          FROM TBL_DAYPLAN
         WHERE WEEKPLAN_CODE = ?
    `;
}