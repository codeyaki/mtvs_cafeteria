import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import weekMenusReducer from './WeekMenusModule';
const rootReducer = combineReducers({
    menuReducer,
    weekMenusReducer
});

export default rootReducer;
