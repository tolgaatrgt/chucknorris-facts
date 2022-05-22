import axios from 'axios';
import { categoryActionTypes } from './actionTypes';
import { AppDispatch } from '../store';

export type GetCategoriesRequestAction = { type: string }
export const getCategoriesRequest = (): GetCategoriesRequestAction => ({ type: categoryActionTypes.GET_CATEGORIES_REQUEST })

export type GetCategoriesSuccessAction = { type: string, payload: string[] }
export const getCategoriesSuccess = (categories: string[]): GetCategoriesSuccessAction => ({
    type: categoryActionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
})

export type GetCategoriesFailureAction = { type: string, payload: string }
export const getCategoriesFailure = (error: any): GetCategoriesFailureAction => ({
    type: categoryActionTypes.GET_CATEGORIES_FAILURE,
    payload: error.response.data.message
})


export type SelectCategoryAction = { type: string, payload: string }
export const selectCategory = (category: string): SelectCategoryAction => ({
    type: categoryActionTypes.SELECT_CATEGORY,
    payload: category
})

export const getCategoriesAsync = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(getCategoriesRequest())
        try {
            const categoriesResponse = await axios.get("https://api.chucknorris.io/jokes/categories")
            dispatch(getCategoriesSuccess(categoriesResponse.data))
        }
        catch (error) {
            dispatch(getCategoriesFailure(error))
        }
    }
}
