const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintSuccess = require('../printer/print-success');
const PrintError = require('../printer/print-error');


exports.selectWeekMenuList = async (req, res, next) => {
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || '1');
    const requestEntity = {
        offset: offset,
        limit: limit,
    }
    const results = await WeekMenuService.selectWeekMenuList(requestEntity);
    if(results.count == 0){
        PrintError.errorNotFound(res)
    }
    const host = req.headers.host;
    const isNext = (offset+1 < results.count-1) ? true : false;
    const isPrevious = (offset-1 > 0) ? true : false;
    const nextWeek = isNext ? 'http://' + host + '/week-menus' + '?offset=' + (offset-1) + "&limit=" + limit : null;
    const previousWeek = isPrevious ? 'http://' + host + '/week-menus' + '?offset=' + (offset+1) + "&limit=" + limit : null;
    const resBody = {
        count: results.count,
        offset: offset,
        nextWeek: nextWeek,
        previousWeek: previousWeek,
        limit: limit,
        results: results.results
    }
    return res.status(HttpStatus.OK).json(resBody);
} 