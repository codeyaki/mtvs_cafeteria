const menuQuery = require('../databases/menu-query');
const MenuAndCategoryResDTO = require('../dto/response/menu-and-category-res-dto');
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
                menudto.setAvgScore(menu.AVG_SCORE)
                menuList.push(menudto);
            });
            resolve(menuList);
        });
    });
}

exports.selectMenuByMenuCode = (connection, menuCode) => {
    return new Promise((resolve, reject) => {
        connection.query(menuQuery.selectMenuByMenuCode(), [menuCode], (err, results, feilds)=>{
            if(err){
                console.error(err);
                return reject(err);
            }
            // console.log(results);
            const menu = new MenuAndCategoryResDTO({
                menuCode: results[0].MENU_CODE,
                menuName: results[0].MENU_NAME,
                categoryCode: results[0].CATEGORY_CODE,
                categoryName: results[0].CATEGORY_NAME,
                avgScore: results[0].AVG_SCORE
            });
            resolve(menu);
        } );
    })
}