import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import weekplanReducer from './WeekPlanModule'
import reviewReducer from './ReviewModule';

const rootReducer = combineReducers({
    menuReducer,
    weekplanReducer,
    reviewReducer
});

export default rootReducer;
