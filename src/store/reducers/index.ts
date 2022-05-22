import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import jokesReducer from './jokes';

const reducers = {
  categories: categoriesReducer,
  jokes: jokesReducer
}
const reducer = combineReducers(reducers);

export type State = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

export default reducer;
