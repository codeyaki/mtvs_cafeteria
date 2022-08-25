const MenuController = require('../repositories/menu-repo.js');
const getConnection = require('../databases/connection');
const MenuResDTO = require('../dto/response/menu-res-dto.js');

exports.selectMenuList = async (limitOffset) => {
    const connection = getConnection();
    const count = await MenuController.countMenu(connection);
    
    const menuList = await MenuController.selectMenuList(connection, limitOffset);

    return ({count:count, results:menuList})
    
    
}