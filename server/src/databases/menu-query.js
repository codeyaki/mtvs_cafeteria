
exports.countMenu = () => {
    return `SELECT COUNT(*) FROM TBL_MENU`
}

exports.selectMenuList = () => {
    return `
         SELECT 
               A.*
             , IFNULL(AVG(B.REVIEW_SCORE), 0) 'AVG_SCORE'
          FROM TBL_MENU A
          LEFT JOIN TBL_REVIEW B ON (A.MENU_CODE = B.MENU_CODE)
         GROUP BY A.MENU_CODE
         ORDER BY A.CATEGORY_CODE, A.MENU_NAME
         LIMIT ?
        OFFSET ?

    `
}

exports.selectMenuByMenuCode = () => {
    return `
        SELECT
               A.MENU_CODE
             , A.MENU_NAME
             , A.CATEGORY_CODE
             , AVG(C.REVIEW_SCORE)
          FROM TBL_MENU A
          JOIN TBL_CATEGORY B ON (A.CATEGORY_CODE = B.CATEGORY_CODE)
          LEFT JOIN TBL_REVIEW C ON (A.MENU_CODE = C.MENU_CODE)
         WHERE A.MENU_CODE = ?
         GROUP BY A.MENU_CODE
    `;
}