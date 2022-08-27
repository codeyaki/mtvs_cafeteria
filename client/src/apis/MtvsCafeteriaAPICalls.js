import { GET_WEEKPLAN } from '../modules/WeekPlanModule';
import { GET_MENUS, GET_MENUS_DETAILS } from './../modules/MenuModule';
const rootPath = 'https://mtvscafeteria-api.run.goorm.io'
/** 테스트용 url */
// const rootPath = 'http://127.0.0.1:8888'

export function callGetWeekplanAPI(url){
    const requestURL = (url || rootPath) + '/week-menus';
    return async function getWeekplan(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log('week-menus : ' , result);
        console.log(result);
        dispatch({type: GET_WEEKPLAN, payload: result});
    }
}

export function callGetMenuAPI(url){
    const requestURL =  url || (rootPath + '/menus');
    return async function getMenu(disptach, getState){
        const result = await fetch(requestURL).then(res => res.json());
        disptach({type:GET_MENUS, payload:result});
    }
}

export function callGetMenuDetailAPI(menuCode, url){
    const menuRequestURL = url || (rootPath + `/menus/${menuCode}`);
    const reviewRequestURL = rootPath + `/reviews/${menuCode}`;
    return async function getMenuDetail(dispatch, getState){
        const menu = await fetch(menuRequestURL).then(res => res.json());
        const reviewList = await fetch(reviewRequestURL).then(res => res.json());
        const result ={menu: menu, reviewList: reviewList};
        dispatch({type:GET_MENUS_DETAILS, payload: result})
    }
}