import {createActions, handleActions} from 'redux-actions';


const initState = [];

export const GET_MENUS = 'menus/GET_MENUS';
export const GET_MENUS_DETAILS = 'menus/DETAIL_MENUS'
export const RESET_MENUS = 'menus/RESET_MENUS'


const actions = createActions({
    [GET_MENUS]: () => {},
    [GET_MENUS_DETAILS]: () => {},
    [RESET_MENUS]: () => {}
})


const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, {payload}) => {
            return payload;
        },
        [GET_MENUS_DETAILS]: (state, {payload}) => {
            return payload;
        },
        [RESET_MENUS]: () => initState
    }, initState
);

export default menuReducer;