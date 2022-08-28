const bcypt = require('bcrypt');
const { datetimeFormat } = require('../../utility/date-format');

class ReviewReqDTO{
    menuCode;
    clientIp;
    nickname; 
    password;
    score;
    details;
    clientIp;
    insertDate;
    constructor(menuCode, nickname, password, score, details, clientIp, insertDate) {
        this.menuCode = menuCode;
        this.clientIp = clientIp;
        this.nickname = nickname;
        this.password = bcypt.hashSync(password, 10);
        this.score = score;
        this.details = details;
        this.clientIp = clientIp;
        this.insertDate = datetimeFormat(insertDate);
    }
    
}

module.exports = ReviewReqDTO;