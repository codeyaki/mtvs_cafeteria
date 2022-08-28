
import { handleActions, createActions } from 'redux-actions';
const initState = {};

export const NEW_REVIEW = 'review/NEW_REVIEW';
export const DELETE_REVIEW = 'review/DELETE_REVIEW';
export const RESET_STATE = 'reivew/RESET_STATE';

const actions = createActions(
    {
        [RESET_STATE]: () => {}
    }
)

const reviewReducer = handleActions(
    {
        [NEW_REVIEW]: (state, {payload}) => payload,
        [DELETE_REVIEW]: (state, {payload}) => payload,
        [RESET_STATE]: () => initState
    }, initState
);

export default reviewReducer;