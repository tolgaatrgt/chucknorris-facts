import categoriesReducer, { CategoriesState } from '../store/reducers/categories'
import { categoryActionTypes } from '../store/actions/actionTypes';

it('should handle GET_CATEGORIES_REQUEST', () => {
  const startAction = {
    type: categoryActionTypes.GET_CATEGORIES_REQUEST
  };
  expect(categoriesReducer({} as CategoriesState, startAction)).toEqual({ isPending: true });
});

it('should handle GET_CATEGORIES_SUCCESS', () => {

  const mockCategories = ['dev', 'food']
  const successAction = {
    type: categoryActionTypes.GET_CATEGORIES_SUCCESS,
    payload: mockCategories,
  };
  expect(categoriesReducer({} as CategoriesState, successAction)).toEqual({ categoryList: mockCategories, isPending: false });
});
it('should handle GET_CATEGORIES_FAILURE', () => {
  const mockError = 'Some error occured.'
  const failureAction = {
    type: categoryActionTypes.GET_CATEGORIES_FAILURE,
    payload: mockError,
  };
  expect(categoriesReducer({} as CategoriesState, failureAction)).toEqual({
    error: mockError,
    isPending: false
  });
});

it('should handle SELECT_CATEGORY', () => {
  const mockCategory = 'celebrity'
  const selectCategoryAction = {
    type: categoryActionTypes.SELECT_CATEGORY,
    payload: mockCategory,
  };
  expect(categoriesReducer({} as CategoriesState, selectCategoryAction)).toEqual({ selectedCategory: mockCategory });
});