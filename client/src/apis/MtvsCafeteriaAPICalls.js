import { GET_WEEKPLAN } from '../modules/WeekPlanModule';
import { GET_MENUS, GET_MENUS_DETAILS } from './../modules/MenuModule';
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
        const result = await fetch(requestURL).then(res => res.json());

        disptach({type:GET_MENUS, payload:result});
    }
}

export function callGetMenuDetailAPI(menuCode){
    const requestURL = rootPath + `/menus/${menuCode}`;
    return async function getMenuDetail(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());

        dispatch({type:GET_MENUS_DETAILS, payload: result})
    }
}