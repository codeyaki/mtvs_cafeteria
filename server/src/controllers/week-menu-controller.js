const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintError = require('../printer/print-error');
const serverPath = require('../../app');


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
    const host = `${req.protocol}://${req.headers.host}`;
    const isPrevious = (offset+limit < results.count) ? true : false;
    const isNext = (offset-limit >= 0) ? true : false;
    console.log(isNext);
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