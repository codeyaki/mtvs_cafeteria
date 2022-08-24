import { GET_MENUS } from "../modules/MenuModule";

const rootPath = 'https://mtvscafeteria-api.run.goorm.io/'


export function callGetWeekMenusAPI(){
    const requestURL = rootPath + 'week-menus';
    return async function getMenus(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        console.log('week-menus : ' , result);
        dispatch({type: GET_MENUS, payload: result.results});
    }
}