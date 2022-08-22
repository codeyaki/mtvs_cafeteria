const HttpStatus = require('http-status');

exports.successFound = (res, results) => {
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'data found successfully',
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