import * as actionTypes from './types'

export const addFavorite = (id) => {
    return {type: actionTypes.ADD_FAVORITE, payload: id}
}

export const removeFavorite = (id) => {
    return {type: actionTypes.REMOVE_FAVORITE, payload: id}
}

export const getFavorite = (id) => {
    return {type: actionTypes.GET_FAVORITE, payload: id}
}