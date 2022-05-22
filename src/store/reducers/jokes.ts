import { AnyAction } from 'redux';
import { jokeActionTypes } from '../actions/actionTypes'

export type Joke = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export type JokesState = {
  isPending: boolean,
  jokeList: Joke[],
  error: string,
  totalResults: number | null,
  searchQuery: string | null,
}
const initialState: JokesState = {
  isPending: false,
  jokeList: [],
  error: '',
  totalResults: null,
  searchQuery: null,
};

const jokesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case jokeActionTypes.GET_RANDOM_JOKE_REQUEST:
      return {
        ...state,
        isPending: true
      }

    case jokeActionTypes.GET_RANDOM_JOKE_SUCCESS:
      return {
        ...state,
        jokeList: [action.payload],
        isPending: false
      }

    case jokeActionTypes.GET_RANDOM_JOKE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPending: false,
        jokeList: [],
      }
    case jokeActionTypes.GET_SEARCHED_JOKES_REQUEST:
      return {
        ...state,
        isPending: true,
        error: '',
        totalResults: null,
      }

    case jokeActionTypes.GET_SEARCHED_JOKES_SUCCESS:
      return {
        ...state,
        jokeList: action.payload.jokeList,
        isPending: false,
        totalResults: action.payload.totalJokes,
        searchQuery: action.payload.searchQuery,
        error: ''
      }

    case jokeActionTypes.GET_SEARCHED_JOKES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPending: false,
        totalResults: null,
        searchQuery: null,
        jokeList: []
      }
    //
    case jokeActionTypes.GET_JOKE_BY_CATEGORY_REQUEST:
      return {
        ...state,
        isPending: true,
        error: '',
        totalResults: null,
        searchQuery: null,
      }

    case jokeActionTypes.GET_JOKE_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        jokeList: [action.payload],
        isPending: false,
        error: ''
      }

    case jokeActionTypes.GET_JOKE_BY_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPending: false,
        jokeList: []
      }


    default:
      return state;
  }
}

export default jokesReducer;
