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

    const results = await MenuService.selectMenuList(limitOffset);

    const isNext = (offset+rawCount < results.count-1) ? true : false;
    const isPrevious = (offset-1 > 0) ? true : false;
    const next = isNext ? serverPath.rootUrl + '/menus' + '?offset=' + (offset+rawCount) + "&limit=" + limit : null;
    const previous = isPrevious ? serverPath.rootUrl + '/menus' + '?offset=' + (offset-rawCount) + "&limit=" + limit : null;
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

