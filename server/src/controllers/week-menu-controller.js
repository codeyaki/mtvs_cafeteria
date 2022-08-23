const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintSuccess = require('../printer/print-success');
const PrintError = require('../printer/print-error');


exports.selectWeekMenuList = async (req, res, next) => {
    const url = req.headers.host;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || '1');
    const requestEntity = {
        offset: offset,
        limit: limit,
    }
    console.log('controller : ');
    console.log(requestEntity);
    const resultEntity = await WeekMenuService.selectWeekMenuList(requestEntity);
    return PrintSuccess.successFoundList(res, url, resultEntity.count, offset+1, limit, resultEntity.results);
}