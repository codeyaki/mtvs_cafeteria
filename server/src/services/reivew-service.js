const ReviewRepo = require('../repositories/review-repo.js');
const getConnection = require ('../databases/connection');



exports.findReviewListByMenuCode = async(menuCode) => {
    const connection = getConnection();
    const avgScore = await ReviewRepo.averageReviewScore(connection, menuCode);
    const result = await ReviewRepo.selectReviewByMenuCode(connection, menuCode);
    connection.end();
    return {avgScore: avgScore, result: result};


}