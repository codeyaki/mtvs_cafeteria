import { GET_WEEKPLAN } from '../modules/WeekPlanModule';
import { GET_MENUS } from './../modules/MenuModule';
const rootPath = 'https://mtvscafeteria-api.run.goorm.io'


export function callGetWeekplanAPI(url){
    const requestURL = (url || rootPath) + '/week-menus';
    return async function getWeekplan(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log('week-menus : ' , result);
        dispatch({type: GET_WEEKPLAN, payload: result});
    }
}

export function callGetMenuAPI(url){
    const requestURL = ( url || rootPath) + '/menus';
    return async function getMenu(disptach, getState){
        console.log(url);
        const result = await fetch(requestURL).then(res => res.json());
        
        console.log(result);

        disptach({type:GET_MENUS, payload:result});
    }
}