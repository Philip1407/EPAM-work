const addAccountToStore = (user) => {
    if(!localStorage.getItem('accounts'))
        localStorage.setItem('accounts',JSON.stringify([user]))
    else
        localStorage.setItem('accounts',JSON.stringify([...JSON.parse(localStorage.getItem('accounts')),user]))
}
const removeAccountFromStore = (email) => localStorage.setItem('accounts', JSON.parse(localStorage.getItem('accounts')).filter(e=>e.email===email))
const getAccountFromStore = (email) => {
    if (email)
        return JSON.parse(localStorage.getItem('accounts'))?.filter(e=>e.email===email)[0]
    else
        return null
}
const getAllAccount = () => JSON.parse(localStorage.getItem('accounts'))

const saveLoginState = (user) => localStorage.setItem('loggedIn',JSON.stringify(user))
const removeLoginState = () => localStorage.removeItem('loggedIn')


const addFavoriteToStore = (id) => {
    if(!localStorage.getItem('favorites'))
        localStorage.setItem('favorites',JSON.stringify([id]))
    else
        localStorage.setItem('favorites',JSON.stringify([...JSON.parse(localStorage.getItem('favorites')),id]))
}
const removeFavoriteFromStore = (id) => localStorage.setItem('favorites',JSON.stringify(JSON.parse(localStorage.getItem('favorites')).filter(e=>e!==id)))
const getFavoritesFromStore = () => JSON.parse(localStorage.getItem('favorites'))

export{
    addAccountToStore,
    removeAccountFromStore,
    getAccountFromStore,
    getAllAccount,
    saveLoginState,
    removeLoginState,
    addFavoriteToStore,
    removeFavoriteFromStore,
    getFavoritesFromStore
}