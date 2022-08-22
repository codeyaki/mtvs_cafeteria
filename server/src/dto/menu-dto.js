class MenuDTO{
    menuCode;
    menuName;
    constructor(resultMap){
        this.menuCode = resultMap.MENU_CODE;
        this.menuName = resultMap.MENU_NAME;
    }
}