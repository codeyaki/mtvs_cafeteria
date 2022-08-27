class MenuResDTO{
    menuCode;
    menuName;
    categoryCode;
    avgScore;
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