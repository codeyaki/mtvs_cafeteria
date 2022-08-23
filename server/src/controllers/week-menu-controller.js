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
    console.log('controller : ');
    console.log(requestEntity);
    const results = await WeekMenuService.selectWeekMenuList(requestEntity);
    return PrintSuccess.successFound(res, results);
}