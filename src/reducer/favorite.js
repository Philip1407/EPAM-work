import * as actionTypes from '../action/types'
import * as helper from '../helper'

const initialState = {
    favorite: []
}

let favorite_list

const favorite = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_FAVORITE:
            favorite_list = helper.getFavoritesFromStore(action.payload)
            return{
                ...state,
                ...favorite_list
            }
        case actionTypes.REMOVE_FAVORITE:
            helper.removeFavoriteFromStore(action.payload)
            favorite_list = helper.getFavoritesFromStore(action.payload)
            return{
                ...state,
                ...favorite_list
            }
        case actionTypes.ADD_FAVORITE:
            helper.addFavoriteToStore(action.payload)
            return {
                ...state,
                ...favorite_list
            }
        default:
            return state
    }
}

export default favorite