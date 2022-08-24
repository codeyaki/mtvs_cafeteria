import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import weekplanReducer from './WeekPlanModule'
const rootReducer = combineReducers({
    menuReducer,
    weekplanReducer
});

export default rootReducer;
