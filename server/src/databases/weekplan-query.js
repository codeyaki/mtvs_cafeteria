
exports.countWeekplan = () => {
    return `SELECT COUNT(*) FROM TBL_WEEKPLAN`;
}

exports.selectWeekplan = () => {
    return `
        SELECT
               A.*
          FROM TBL_WEEKPLAN A
         ORDER BY A.WEEK_END DESC
         LIMIT ?
        OFFSET ?
    `;

}