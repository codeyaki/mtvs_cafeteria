

exports.selectReviewByMenuCode = () => {
    return `
        SELECT
               A.NICKNAME
             , A.REVIEW_CODE
             , A.REVIEW_SCORE
             , A.REVIEW_DETAILS
             , A.CLIENT_IP
             , A.INSERT_DATE
          FROM TBL_REVIEW A
         WHERE A.MENU_CODE = ?
    `;
}

exports.averageReviewScore = () => {
    return `
        SELECT 
               AVG(A.REVIEW_SCORE)
          FROM TBL_REVIEW A
         WHERE A.MENU_CODE = ?
    `;
}
//menuCode, nickname, password, score, details, clientIp, insertDate
exports.insertReview = (reviewResDTO) => {
    return `
        INSERT
               TBL_REVIEW
        (
          REVIEW_CODE, NICKNAME, PASSWORD
        , REVIEW_SCORE, REVIEW_DETAILS, MENU_CODE
        , CLIENT_IP, INSERT_DATE
        )
        VALUES
        (
          0, \'${reviewResDTO.nickname}\', \'${reviewResDTO.password}\' 
        , ${reviewResDTO.score}, \'${reviewResDTO.details}\', ${reviewResDTO.menuCode}
        , \'${reviewResDTO.clientIp}\', \'${reviewResDTO.insertDate}\'
        )
    `;
}