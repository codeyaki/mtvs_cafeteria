const ReviewService = require('../services/reivew-service.js');

exports.findReviewListByMenuCode = async (req, res, next) => {
    const menuCode = req.params.menuCode;
    const rawCount = 40;
    const offset = parseInt(req.query.offset || '0');
    const limit = parseInt(req.query.limit || rawCount);

    const results = await ReviewService.findReviewListByMenuCode(menuCode)

    console.log(offset, limit);
}