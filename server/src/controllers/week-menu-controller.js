const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');


exports.selectWeekMenuList = async (req, res, next) => {
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || '1');
    const requestEntity = {
        offset: offset,
        limit: limit,
    }
    const results = await WeekMenuService.selectWeekMenuList(requestEntity);
    if(results.count == 0){
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            message: `data not found`
        });
    }
    const host = `http://${req.headers.host}`;
    const isPrevious = (offset+limit < results.count) ? true : false;
    const isNext = (offset-limit >= 0) ? true : false;
    const previousWeek = isPrevious ? host + '/week-menus' + '?offset=' + (offset+limit) + "&limit=" + limit : null;
    const nextWeek = isNext ? host + '/week-menus' + '?offset=' + (offset-limit) + "&limit=" + limit : null;
    const resBody = {
        count: results.count,
        nextWeek: nextWeek,
        previousWeek: previousWeek,
        results: results.results
    }
    return res.status(HttpStatus.OK).json(resBody);
} 