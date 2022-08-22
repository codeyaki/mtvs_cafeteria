const HttpStatus = require('http-status');

exports.errorConflict = (res) => {
    return res.status(HttpStatus.CONFLICT).json({
        status: HttpStatus.CONFLICT,
        message: `data conflict error`
    });
}

exports.errorNotFound = (res) => {
    return res.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        message: `data not found`
    });
}

exports.errorNotChanged = (res) => {
    return res.status(HttpStatus.CONFLICT).json({
        status: HttpStatus.CONFLICT,
        message: `data not Changed`
    })
}