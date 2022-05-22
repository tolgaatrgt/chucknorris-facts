import { AnyAction } from 'redux';
import { categoryActionTypes } from '../actions/actionTypes'

export type CategoriesState = {
  isPending: boolean,
  categoryList: string[],
  selectedCategory: string,
  error: string,
}
const initialState: CategoriesState = {
  isPending: false,
  categoryList: [],
  selectedCategory: '',
  error: ''
};

const categoriesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case categoryActionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isPending: true
      }

    case categoryActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
        isPending: false
      }

    case categoryActionTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }

    case categoryActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }

    default:
      return state;
  }
}

export default categoriesReducer;
