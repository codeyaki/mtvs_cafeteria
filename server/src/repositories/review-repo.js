const ReviewQuery = require('../databases/review-query.js');
const ReviewResDTO = require('../dto/response/review-res-dto.js');

exports.selectReviewByMenuCode = (connection, menuCode) => {
    return new Promise((resolve, reject) => {
        connection.query(ReviewQuery.selectReviewByMenuCode(), [menuCode], (err, results)=>{
            if(err){
                console.error(err);
                return reject(err);
            }

            let reviewList = [];
            results.map((result) => reviewList.push(new ReviewResDTO(result)));
            // console.log(reviewList);
            
            resolve(reviewList);
        })
    })
}

exports.selectPw = (connection, reviewCode) => {
    return new Promise((resolve, reject) => {
        connection.query(ReviewQuery.selectPw(), [reviewCode], (err, results) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            resolve(results[0].PASSWORD);
        })
    })
}



exports.averageReviewScore = (connection, menuCode) => {
    return new Promise((resolve, reject) => {
        connection.query(ReviewQuery.averageReviewScore(), [menuCode], (err, results) => {
            if(err){
                console.error(err);
                return reject(err);
            }
            resolve(results[0]['AVG_SCORE']);
        })
    })
}

exports.insertReview = (connection, reviewResDTO) => {
    return new Promise((resolve, reject) => {
        connection.query(ReviewQuery.insertReview(reviewResDTO), (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            // console.log(results);
            resolve(results);
        })
    })
}

exports.deleteReivew = (connection, reviewCode) => {
    return new Promise((resovle, reject) => {
        connection.query(ReviewQuery.deleteReivew(), [reviewCode], (err, results, fields) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            // console.log(results);
            resovle(results);
        })
    })
}