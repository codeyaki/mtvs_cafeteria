class ReviewResDTO{
    reviewCode;
    nickname;
    password;
    reviewScore;
    reviewDetails;
    menuCode;
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
        this.password = resultMap.PASSWORD;
        this.reviewScore = resultMap.REVIEW_SCORE;
        this.reviewDetails = resultMap.REVIEW_DETAILS;
        this.menuCode = resultMap.MENU_CODE;
        
    }
    
}

module.exports = ReviewResDTO;