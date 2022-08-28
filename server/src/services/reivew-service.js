const ReviewRepo = require('../repositories/review-repo.js');
const getConnection = require ('../databases/connection');



exports.findReviewListByMenuCode = async(menuCode) => {
    const connection = getConnection();
    const avgScore = await ReviewRepo.averageReviewScore(connection, menuCode);
    const result = await ReviewRepo.selectReviewByMenuCode(connection, menuCode);
    connection.end();
    return {avgScore: avgScore, result: result};
}

exports.newReivew = (reviewReqDTO) => {
    const connection = getConnection();
    return new Promise(async(resolve, reject) => {
        try{
            const results = await ReviewRepo.insertReview(connection, reviewReqDTO);
            console.log({results});
            if(results.affectedRows > 0){
                resolve(results.insertId);
                connection.commit();
            }
            connection.rollback();
            throw new Error();
        } catch (err){
            // console.log(err.message);
            connection.rollback();
            reject(err);
        } finally {
            connection.end();
        }
    })
}