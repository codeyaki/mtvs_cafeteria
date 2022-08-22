const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintSuccess = require('../printer/print-success');
const PrintError = require('../printer/print-error');


exports.selectWeekMenuList = async (req, res, next) => {
    const offset = req.query.offset;
    const limit = req.query.limit;
    const requestEntity = {
        offset: offset,
        limit: limit,
    }
    const results = await WeekMenuService.selectWeekMenuList(requestEntity);
    return PrintSuccess.successFound(res, results);
}