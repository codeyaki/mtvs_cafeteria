const MenuRepo = require('../repositories/menu-repo.js');
const getConnection = require('../databases/connection');

exports.selectMenuList = async (limitOffset) => {
    const connection = getConnection();
    const count = await MenuRepo.countMenu(connection);
    const menuList = await MenuRepo.selectMenuList(connection, limitOffset);
    connection.end();
    return ({count:count, results:menuList})
}

exports.selectMenuByMenuCode = async (menuCode) => {
    const connection = getConnection();
    const menu = await MenuRepo.selectMenuByMenuCode(connection, menuCode);
    connection.end();
    return menu;
}