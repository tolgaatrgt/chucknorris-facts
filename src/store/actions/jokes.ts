import axios from 'axios';
import { jokeActionTypes } from './actionTypes';
import { AppDispatch } from '../store';
import { Joke } from '../reducers/jokes';

// RANDOM JOKE
export type getRandomJokeRequestAction = { type: string }
export const getRandomJokeRequest = () => ({ type: jokeActionTypes.GET_RANDOM_JOKE_REQUEST })

export type getRandomJokeSuccessAction = { type: string, payload: string }
export const getRandomJokeSuccess = (joke: string): getRandomJokeSuccessAction => ({
    type: jokeActionTypes.GET_RANDOM_JOKE_SUCCESS,
    payload: joke
})

export type getRandomJokeFailureAction = { type: string, payload: string }
export const getRandomJokeFailure = (error: any): getRandomJokeFailureAction => ({
    type: jokeActionTypes.GET_RANDOM_JOKE_FAILURE,
    payload: error
})

export const getRandomJokeAsync = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(getRandomJokeRequest())

        try {
            const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/random")
            dispatch(getRandomJokeSuccess(jokeResponse.data))
        }
        catch (error: any) {
            dispatch(getRandomJokeFailure(error))
        }
    }
}
// SEARCHED JOKES
export type getSearchedJokesRequestAction = { type: string, payload?: string }
export const getSearchedJokesRequest = (): getSearchedJokesRequestAction => ({ type: jokeActionTypes.GET_SEARCHED_JOKES_REQUEST })

export type getSearchedJokesSuccessAction = { type: string, payload: { jokeList: Joke[], totalJokes: number, searchQuery: string } }
export const getSearchedJokesSuccess = (jokeList: Joke[], totalJokes: number, query: string): getSearchedJokesSuccessAction => ({
    type: jokeActionTypes.GET_SEARCHED_JOKES_SUCCESS,
    payload: { jokeList: jokeList, totalJokes: totalJokes, searchQuery: query }
})

export type getSearchedJokeFailureAction = { type: string, payload: string }
export const getSearchedJokesFailure = (error: any): getSearchedJokeFailureAction => ({
    type: jokeActionTypes.GET_SEARCHED_JOKES_FAILURE,
    payload: error.response.data.message
})

export const getSearchedJokesAsync = (searchText: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getSearchedJokesRequest())

        try {
            const searchedJokesResponse = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
            dispatch(getSearchedJokesSuccess(searchedJokesResponse.data.result, searchedJokesResponse.data.total, searchText))
        }
        catch (error: any) {
            dispatch(getSearchedJokesFailure(error))
        }
    }
}

// JOKES BY CATEGORY
export type getJokeByCategoryRequestAction = { type: string, payload?: string }
export const getJokeByCategoryRequest = (): getJokeByCategoryRequestAction => ({ type: jokeActionTypes.GET_JOKE_BY_CATEGORY_REQUEST })

export type getJokeByCategorySuccessAction = { type: string, payload: Joke }
export const getJokeByCategorySuccess = (joke: Joke): getJokeByCategorySuccessAction => ({
    type: jokeActionTypes.GET_JOKE_BY_CATEGORY_SUCCESS,
    payload: joke
})

export type getJokeByCategoryFailureAction = { type: string, payload: string }
export const getJokeByCategoryFailure = (error: any): getJokeByCategoryFailureAction => ({
    type: jokeActionTypes.GET_JOKE_BY_CATEGORY_FAILURE,
    payload: error.response.data.message
})

export const getJokeByCategoryAsync = (category: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getJokeByCategoryRequest())

        try {
            const jokeByCategoryResponse = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
            dispatch(getJokeByCategorySuccess(jokeByCategoryResponse.data))
        }
        catch (error: any) {
            dispatch(getJokeByCategoryFailure(error))
        }
    }
}
