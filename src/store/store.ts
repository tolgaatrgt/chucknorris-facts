import { legacy_createStore as createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, { State } from './reducers';

export type AppDispatch = ThunkDispatch<State, any, AnyAction>; 

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
