import { GET_WEEKPLAN } from './../modules/WeekPlanModule';
const rootPath = 'https://mtvscafeteria-api.run.goorm.io/'


export function callGetWeekplanAPI(url){
    const requestURL = (url || rootPath) + 'week-menus';
    return async function getWeekplan(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        // console.log('week-menus : ' , result);
        dispatch({type: GET_WEEKPLAN, payload: result});
    }
}