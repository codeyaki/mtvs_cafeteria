const { datetimeFormat } = require("../../utility/date-format");

class ReviewResDTO{
    reviewCode;
    nickname;
    reviewScore;
    reviewDetails;
    clientIp;
    insertDate;
    // constructor(data){
    //     this.reviewCode = data.reviewCode;
    //     this.nickname = data.nickname;
    //     this.password = data.password;
    //     this.reviewScore = data.reviewScore;
    //     this.reviewDetails = data.reviewDetails;
    //     this.menuCode = data.menuCode;
    // }
    constructor(resultMap) {
        this.reviewCode = resultMap.REVIEW_CODE;
        this.nickname = resultMap.NICKNAME;
        this.reviewScore = resultMap.REVIEW_SCORE;
        this.reviewDetails = resultMap.REVIEW_DETAILS;
        this.clientIp = resultMap.CLIENT_IP;
        this.insertDate = datetimeFormat(resultMap.INSERT_DATE);
    }
    
}

module.exports = ReviewResDTO;