const httpStatus = require('http-status');
const MenuService = require('../services/menu-service.js');


exports.selectMenuList = async (req, res) => {
    console.log('hi');
    const rawCount = 40;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || rawCount);
    const limitOffset = {
        offset: offset,
        limit: limit
    }
    
    const host = req.headers.host;
    const results = await MenuService.selectMenuList(limitOffset);
    const isNext = (offset+rawCount < results.count-1) ? true : false;
    const isPrevious = (offset-1 > 0) ? true : false;
    const next = isNext ? 'http://' + host + '/menus' + '?offset=' + (offset+rawCount) + "&limit=" + limit : null;
    const previous = isPrevious ? 'http://' + host + '/menus' + '?offset=' + (offset-rawCount) + "&limit=" + limit : null;
    const resBody = {
        count: results.count,
        next: next,
        previous: previous,
        results: results.results
    }
    return res.status(httpStatus.OK).json(resBody);
};

