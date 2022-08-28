
import { handleActions } from 'redux-actions';
const initState = {};

export const NEW_REVIEW = 'review/NEW_REVIEW'

const reviewReducer = handleActions(
    {
        [NEW_REVIEW]: (state, {payload}) => payload
    }, initState
);

export default reviewReducer;