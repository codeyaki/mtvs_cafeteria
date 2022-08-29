class MenuResDTO{
    menuCode;
    menuName;
    categoryCode;
    avgScore;
    constructor(data) {
        this.menuCode = data.MENU_CODE;
        this.menuName = data.MENU_NAME;
        this.categoryCode = data.CATEGORY_CODE;
        this.avgScore = data.AVG_SCORE;
    }
    

    setMenuCode(menuCode){
        this.menuCode = menuCode;
    }
    setMenuName(menuName){
        this.menuName = menuName;
    }
    setCategoryCode(categoryCode){
        this.categoryCode = categoryCode;
    }
    setAvgScore(avgScore){
        this.avgScore = avgScore;
    }
}

module.exports = MenuResDTO;