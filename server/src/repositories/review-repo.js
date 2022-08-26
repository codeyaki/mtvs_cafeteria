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
            console.log(reviewList);
            
            

        })
    })

}