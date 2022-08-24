
import { GET_WEEK_MENUS } from './../modules/WeekMenusModule';
const rootPath = 'https://mtvscafeteria-api.run.goorm.io/'


export function callGetWeekMenusAPI(){
    const requestURL = rootPath + 'week-menus';
    return async function getMenus(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log('week-menus : ' , result);
        dispatch({type: GET_WEEK_MENUS, payload: result});
    }
}