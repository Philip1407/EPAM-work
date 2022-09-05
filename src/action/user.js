import * as actionTypes from './types'

export const registerNewAccount = (user) =>{
    return {type: actionTypes.REGISTER, payload: user}
}

export const loginAccount = (user) => {
    return {type: actionTypes.LOGIN, payload:user}
}

export const logoutAccount = () => {
    return {type: actionTypes.LOGOUT}
}

