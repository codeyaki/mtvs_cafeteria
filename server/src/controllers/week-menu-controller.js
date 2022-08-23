const HttpStatus = require('http-status');
const WeekMenuService = require('../services/week-menu-service');
const PrintSuccess = require('../printer/print-success');
const PrintError = require('../printer/print-error');


exports.selectWeekMenuList = async (req, res, next) => {
    const contextPath = req.headers.host;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || '1');
    const requestEntity = {
        offset: offset,
        limit: limit,
    }
    const resDTO = await WeekMenuService.selectWeekMenuList(requestEntity);
    if(resDTO.results == null){
        PrintError.errorNotFound(res)
    }

    return PrintSuccess.successFoundList(res, contextPath, offset, limit, resDTO);
} 