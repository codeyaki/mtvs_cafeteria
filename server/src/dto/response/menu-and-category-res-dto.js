class MenuAndCategoryResDTO{
    menuCode;
    menuName;
    categoryCode;
    categoryName;
    constructor(data) {
        this.menuCode = data.menuCode;
        this.menuName = data.menuName;
        this.categoryCode = data.categoryCode;
        this.categoryName = data.categoryName;
    }
    
}

module.exports = MenuAndCategoryResDTO;