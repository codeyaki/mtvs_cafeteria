

exports.selectReviewByMenuCode = () => {
    return `
        SELECT
               *
          FROM TBL_REVIEW A
         WHERE A.MENU_CODE = ?
    `;
}

exports.averageReviewScore = () => {
    return `
        SELECT 
               AVG(A.REVIEW_SCORE)
          FROM TBL_REVIEW A
         WHERE A.MENU_CODE = ?
    `;
}