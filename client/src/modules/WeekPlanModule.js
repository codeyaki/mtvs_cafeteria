import { createActions, handleActions } from 'redux-actions';
const initState = {};

export const GET_WEEKPLAN = 'weekplan/GET_WEEKPLAN'

const actions = createActions({
    [GET_WEEKPLAN]: () => {}
})

const weekplanReducer = handleActions(
    {
        [GET_WEEKPLAN]: (state, {payload}) => {
            return payload;
        }
    }, initState
);

export default weekplanReducer;