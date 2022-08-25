const menuQuery = require('../databases/menu-query');
const MenuResDTO = require('../dto/response/menu-res-dto');

exports.countMenu = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(menuQuery.countMenu(), (err, results, fields) => {
            if(err){
                console.error(err);
                reject(err);
            }
            resolve(results[0]['COUNT(*)']);
        });
    });
}   

exports.selectMenuList = (connection, limitOffset) => {
    return new Promise((resolve, reject) => {
        connection.query(menuQuery.selectMenuList(), [limitOffset.limit, limitOffset.offset], (err, results, fields) => {
            if(err) {
                console.error(err);
                reject(err);
            }
            let menuList = []
            results.map(menu => {
                let menudto = new MenuResDTO();
                menudto.setMenuCode(menu.MENU_CODE);
                menudto.setMenuName(menu.MENU_NAME);
                menudto.setCategoryCode(menu.CATEGORY_CODE);
                menuList.push(menudto);
            });
            resolve(menuList);
        });
    });
}