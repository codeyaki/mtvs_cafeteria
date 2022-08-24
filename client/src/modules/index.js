import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import weekMenuReducer from './WeekMenuModule';

const rootReducer = combineReducers({
    menuReducer,
    weekMenuReducer
});

export default rootReducer;
