const HttpStatus = require('http-status');

exports.successFoundList = (res, url, offset, limit, resDTO) => {
    return res.status(HttpStatus.OK).json({
        count: resDTO.count,
        nextWeek: offset-1 > 0? 'http://' + url + '/week-menus' + '?offset=' + (offset-1) + "&limit=" + limit : null, 
        previousWeek: 'http://' + url + '/week-menus' + '?offset=' + (offset+1) + "&limit=" + limit,
        results: resDTO.results
    });
}

exports.successCreated = (res, results) => {
    return res.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'data created successfully',
        results: {insertedCode: results.insertId}
    });
}

exports.successDelete = (res, results) => {
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'data delete successfully'
    });
}

exports.successChanged = (res, results) => {
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'data changed successfully'
    });
}