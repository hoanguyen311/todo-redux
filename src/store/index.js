import { combineReducers } from 'redux';
import reducers from '../reducers';
import { createStore } from 'redux';

const rootReducer = combineReducers(reducers);

export default createStore(
    rootReducer,
    window.BOOTSTRAP_STATE,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);
