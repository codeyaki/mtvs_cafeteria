import { GET_MENUS } from "../modules/MenuModule";

const rootPath = 'https://mtvsrestaurantapi.run.goorm.io'


export function callGetMenuAPI(){
    const requestURL = rootPath + '/menus';
    return async function getMenus(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        console.log('GET_MENU : ' , result);
        dispatch({type: GET_MENUS, payload: result.results});
    }
}