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
    const isNext = (offset+1 < results.count-1) ? true : false;
    const isPrevious = (offset-1 > 0) ? true : false;
    const nextWeek = isNext ? serverPath + '/week-menus' + '?offset=' + (offset+1) + "&limit=" + limit : null;
    const previousWeek = isPrevious ? serverPath + '/week-menus' + '?offset=' + (offset-1) + "&limit=" + limit : null;
    const resBody = {
        count: results.count,
        nextWeek: nextWeek,
        previousWeek: previousWeek,
        results: results.results
    }
    return res.status(HttpStatus.OK).json(resBody);
} 