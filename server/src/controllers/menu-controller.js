const httpStatus = require('http-status');
const serverPath = require('../../app.js');
const MenuService = require('../services/menu-service.js');


exports.selectMenuList = async (req, res) => {
    const rawCount = 40;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || rawCount);
    const limitOffset = {
        offset: offset,
        limit: limit
    }
    const host = `http://${req.headers.host}`;
    const results = await MenuService.selectMenuList(limitOffset);

    const isNext = (offset+limit < results.count) ? true : false;
    const isPrevious = (offset-limit >= 0) ? true : false;
    const next = isNext ? host + '/menus' + '?offset=' + (offset+limit) + "&limit=" + limit : null;
    const previous = isPrevious ? host + '/menus' + '?offset=' + (offset-limit) + "&limit=" + limit : null;
    const resBody = {
        count: results.count,
        next: next,
        previous: previous,
        results: results.results
    }
    return res.status(httpStatus.OK).json(resBody);
};

exports.selectMenuByMenuCode = async (req, res, next) => {
    const {menuCode} = req.params;

    const results = await MenuService.selectMenuByMenuCode(menuCode);

    return res.status(httpStatus.OK).json(results);
}

