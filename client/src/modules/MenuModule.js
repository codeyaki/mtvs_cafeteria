import {createActions, handleActions} from 'redux-actions';


const initState = [];

export const GET_MENUS = 'menus/GET_MENUS';

const actions = createActions({
    [GET_MENUS]: () => {}
})

const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, {payload}) => {

        return payload;
        }
    }, initState
);

export default menuReducer;