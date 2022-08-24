import { createActions, handleActions } from 'redux-actions';
const initState = {};

export const GET_WEEK_MENUS = 'week/GET_WEEK_MENUS'

const actions = createActions({
    [GET_WEEK_MENUS]: () => {}
})

const weekMenusReducer = handleActions(
    {
        [GET_WEEK_MENUS]: (state, {payload}) => {
            return payload;
        }
    }, initState
);

export default weekMenusReducer;