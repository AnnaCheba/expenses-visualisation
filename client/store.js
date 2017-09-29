// import { createStore, applyMiddleware, compose } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
import { createStore } from 'redux';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = state => state;
const initialState = {};

const store = createStore(
    reducer,
    initialState,
);

export default store;
