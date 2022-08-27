import rootReducer from './modules';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);

export default store;
