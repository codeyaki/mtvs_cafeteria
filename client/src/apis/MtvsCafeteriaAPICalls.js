import { GET_WEEKPLAN } from '../modules/WeekPlanModule';
import { GET_MENUS, GET_MENUS_DETAILS } from './../modules/MenuModule';
import { NEW_REVIEW } from './../modules/ReviewModule';
// const rootPath = 'https://mtvscafeteria-api.run.goorm.io'
/** 테스트용 url */
// const rootPath = 'http://127.0.0.1:8888';
const rootPath = 'http://172.30.1.54:8888';

export function callGetWeekplanAPI(url){
    const requestURL = (url || rootPath) + '/week-menus';
    return async function getWeekplan(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log('week-menus : ' , result);
        dispatch({type: GET_WEEKPLAN, payload: result});
    }
}

export function callGetMenuAPI(url){
    const requestURL =  url || (rootPath + '/menus');
    return async function getMenu(disptach, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log(result);
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
        // console.log(result);
        dispatch({type:GET_MENUS_DETAILS, payload: result});
    }
}

export function callNewReviewAPI(formData){
    const requestURL = rootPath + `/reviews`
    return async function newReview(dispatch, getSate){
        // console.log(requestURL);
        const results = await fetch(requestURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(res => res.json());
        console.log(results);
        dispatch({type:NEW_REVIEW, payload:results});
    }
}