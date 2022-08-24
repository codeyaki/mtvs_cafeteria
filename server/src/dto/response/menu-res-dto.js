class MenuResDTO{
    menuCode;
    menuName;
    categoryCode;
    setMenuCode(menuCode){
        this.menuCode = menuCode;
    }
    setMenuName(menuName){
        this.menuName = menuName;
    }
    setCategoryCode(categoryCode){
        this.categoryCode = categoryCode;
    }

    getMenuCode(){
        return this.menuCode;
    }
    
    getMenuName(){
        return this.menuName;
    }
    
    getCategoryCode(){
        return this.categoryCode;
    }

}

module.exports = MenuResDTO;