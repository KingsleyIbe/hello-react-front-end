import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import greetingReducer from './reducer/greetingsReducer';

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
