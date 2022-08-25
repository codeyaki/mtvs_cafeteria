
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