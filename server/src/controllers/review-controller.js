const httpStatus = require('http-status');
const ReviewReqDTO = require('../dto/request/review-req-dto.js');
const ReviewService = require('../services/reivew-service.js');
const requestIp = require('request-ip');

exports.findReviewListByMenuCode = async (req, res, next) => {
    const menuCode = req.params.menuCode;
    const rawCount = 40;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || rawCount);

    const results = await ReviewService.findReviewListByMenuCode(menuCode)

    console.log(offset, limit);
    res.status(httpStatus.OK).json(results);
}

exports.newReivew = async (req, res, next) => {
    const {nickname, password, score, details, menuCode} = req.body;

    const clientIp = requestIp.getClientIp(req);
    const insertDate = new Date()
    // console.log(req.ip);
    try{
        if(nickname && password && score && details && menuCode){
            const reviewReqDTO = new ReviewReqDTO(menuCode, nickname, password, score, details, clientIp, insertDate);
            const result = await ReviewService.newReivew(reviewReqDTO);
            if(result){
                return res.status(httpStatus.CREATED).json({results:"success", insertedId:menuCode});
            }
        }
        throw {errCode: -9998, errMessage: "입력값이 비어있습니다."};
    } catch(err){
        return res.status(httpStatus.CONFLICT).json({results:"error", errCode: err.errCode, errMessage: err.errMessage})
    }
    // console.log(reviewReqDTO.clientIp.length);
    
    // const results = await ReviewService.newReivew.()
}

exports.deleteReivew = async (req, res) => {
    const {password, reviewCode} = req.body;
    try{
        const result = await ReviewService.deleteReivew(password, reviewCode);
        if(result){
            res.status(httpStatus.OK).json({results: 'success'});
        }
    } catch(err) {
        res.status(httpStatus.CONFLICT).json({results: 'error', errCode: err.errCode, errMessage: err.errMessage});
    }


}