
exports.countMenu = () => {
    return `SELECT COUNT(*) FROM TBL_MENU`
}

exports.selectMenuList = () => {
    return `
        SELECT 
               *
          FROM TBL_MENU
         ORDER BY CATEGORY_CODE, MENU_NAME
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
          FROM TBL_MENU A
          JOIN TBL_CATEGORY B ON (A.CATEGORY_CODE = B.CATEGORY_CODE)
         WHERE A.MENU_CODE = ?
    `;
}