import * as actionTypes from '../action/types'
import * as helper from '../helper'

const initialState = {
    user: JSON.parse(localStorage.getItem('loggedIn'))?.user,
    password: JSON.parse(localStorage.getItem('loggedIn'))?.password,
    email: JSON.parse(localStorage.getItem('loggedIn'))?.email
}

const user = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN:
            let account = helper.getAccountFromStore(action.payload)
            helper.saveLoginState(account)
            console.log(account)
            return{
                ...state,
                ...account
            }
        case actionTypes.LOGOUT:
            helper.removeLoginState()
            return{
                ...state,
                ...initialState
            }
        case actionTypes.REGISTER:
            helper.addAccountToStore(action.payload)
            break
        default:
            return state
    }
}

export default user