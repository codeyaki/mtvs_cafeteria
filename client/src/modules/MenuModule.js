import {createActions, handleActions} from 'redux-actions';


const initState = [];

export const GET_MENUS = 'menus/GET_MENUS';
export const GET_MENUS_DETAILS = 'menus/details'

const actions = createActions({
    [GET_MENUS]: () => {},
    [GET_MENUS_DETAILS]: () => {}
})


const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, {payload}) => {
            return payload;
        },
        [GET_MENUS_DETAILS]: (state, {payload}) => {
            return payload;
        }
    }, initState
);

export default menuReducer;