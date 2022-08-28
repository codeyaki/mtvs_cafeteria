const ReviewRepo = require('../repositories/review-repo.js');
const getConnection = require ('../databases/connection');
const Bcrypt = require('bcrypt');



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

exports.deleteReivew = async (password, reviewCode) => {
    const connection = getConnection();
    const encryptedPW = await ReviewRepo.selectPw(connection, reviewCode);
    if(Bcrypt.compareSync(password, encryptedPW)){
        // console.log('통과');
        const results = await ReviewRepo.deleteReivew(connection, reviewCode);
        if(results.affectedRows == 1){
            return(true);
        }
    }
    throw {errCode: -1997, errMessage: "패스워드가 틀렸습니다."}
    // console.log(encryptedPW)

}