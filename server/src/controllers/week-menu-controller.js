const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');



exports.selectWeekMenuList = async (req, res, next) => {
    const results = await WeekMenuService.selectWeekMenuList();
}