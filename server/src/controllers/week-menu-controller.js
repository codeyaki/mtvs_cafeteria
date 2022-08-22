const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintSuccess = require('../printer/print-success');
const PrintError = require('../printer/print-error');


exports.selectWeekMenuList = async (req, res, next) => {
    const results = await WeekMenuService.selectWeekMenuList();
    return PrintSuccess.successFound(res, results);
}