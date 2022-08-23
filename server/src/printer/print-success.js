const HttpStatus = require('http-status');

exports.successFoundList = (res, url, count, offset, limit, results) => {
    return res.status(HttpStatus.OK).json({
        count: count,
        next: url+'/?offset=' + offset + "$limit=" + limit,
        results: results
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