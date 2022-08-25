const MenuService = require('../services/menu-service.js');


exports.selectMenuList = async (req, res, next) => {
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || '20');
    const requestEntity = {
        offset: offset,
        limit: limit
    }
    const results = await MenuService.selectWeekMenuList(requestEntity);
    console.log(results);
};

