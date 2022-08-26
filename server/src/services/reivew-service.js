const ReviewRepo = require('../repositories/review-repo.js');
const getConnection = require ('../databases/connection');



exports.findReviewListByMenuCode = async(menuCode) => {
    const connection = getConnection();
    const result = await ReviewRepo.selectReviewByMenuCode(connection, menuCode);

    
    return result;


}