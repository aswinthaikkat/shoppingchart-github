//make store using compose,applymiddleware and create store
import { createStore, applyMiddleware, compose } from 'redux';
//thunk is a middleware
import thunk from 'redux-thunk';
//reducer connects states to actions root reducer is mai reducer

import rootReducer from './reducers';
//store requires initialstate . middlewareand rootreducer

const initialState = {};
const middleWare = [thunk];
//creating store
const store = createStore(initialState, rootReducer,
    compose(applyMiddleware(middleWare)));

export default store;