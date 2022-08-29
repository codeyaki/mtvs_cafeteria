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

exports.newReivew = async (reviewReqDTO) => {
    const connection = getConnection();
   
    try{
        connection.beginTransaction();
        const results = await ReviewRepo.insertReview(connection, reviewReqDTO);
        if(results.affectedRows == 1){
            connection.commit();
            return true;
        }
        connection.rollback();
        throw {errCode: -9000, errMessage:"데이터베이스에 문제가 발생했습니다."};
    } catch (err){
        // console.log(err.message);
        connection.rollback();
        console.log(err);
        throw {errCode: -9999, errMessage:"하나의 메뉴에 ip당 한개의 리뷰만 달 수 있습니다."};
    } finally {
        connection.end();
    }
}

exports.deleteReivew = async (password, reviewCode) => {
    const connection = getConnection();
    const encryptedPW = await ReviewRepo.selectPw(connection, reviewCode);
    
    if(Bcrypt.compareSync(password, encryptedPW)){
        // console.log('통과');
        connection.beginTransaction();
        const results = await ReviewRepo.deleteReivew(connection, reviewCode);
        if(results.affectedRows == 1){
            connection.commit();
            connection.end();
            return(true);
        }
        connection.rollback();
        connection.end();
        throw {errCode: -9000, errMessage:"데이터베이스에 문제가 발생했습니다."};
    }
    
    connection.end();
    throw {errCode: -9997, errMessage: "패스워드가 틀렸습니다."}
    // console.log(encryptedPW)

}