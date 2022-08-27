class MenuAndCategoryResDTO{
    menuCode;
    menuName;
    categoryCode;
    categoryName;
    avgScore;
    constructor(data) {
        this.menuCode = data.menuCode;
        this.menuName = data.menuName;
        this.categoryCode = data.categoryCode;
        this.categoryName = data.categoryName;
        this.avgScore = data.avgScore;
    }
    
}

module.exports = MenuAndCategoryResDTO;