import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchWalletsStart = () => {
    return {
        type: actionTypes.FETCH_WALLETS_START
    }
}
export const fetchWalletsSuccess = (localWallet) => {
    return {
        type: actionTypes.FETCH_WALLETS_SUCCESS,
        wallets: localWallet
    }
}
export const fetchWalletsFailed = (error) => {
    return {
        type: actionTypes.FETCH_WALLETS_FAILED,
        error: error
    }
}
export const Wallets = (token,userId) => {
    return dispatch => {
        dispatch(fetchWalletsStart())
        axios.get('https://wallet-obuhi-default-rtdb.firebaseio.com/wallets.json')
            .then(response => {
                const localWallet = []
                let idnum = 1
                for (let key in response.data) {
                    localWallet.push({
                        id: key,
                        displayid: `Usr${idnum}`,
                        name: response.data[key].name,
                        phone: response.data[key].phone,
                        amount: response.data[key].amount,
                    })
                    idnum = idnum + 1
                }
                dispatch(fetchWalletsSuccess(localWallet))
            }).catch(error => {
                dispatch(fetchWalletsFailed(error))
            })
    }
}

export const addWalletStart = () => {
    return {
        type: actionTypes.ADD_WALLET_START
    }
}
export const addWalletSuccess = (id,data) => {
    return {
        type: actionTypes.ADD_WALLET_SUCCESS,
        id: id,
        data: data
    }
}
export const addWalletFailed = (error) => {
    return {
        type: actionTypes.ADD_WALLET_FAILED,
        error: error
    }
}
export const addWallet = (wallet) => {
    return dispatch => {
        dispatch(addWalletStart())
        axios.post('https://wallet-obuhi-default-rtdb.firebaseio.com/wallets.json', wallet)
            .then(response => {
                dispatch(addWalletSuccess(response.data.name,wallet))
            }).catch(error => {
                dispatch(addWalletFailed(error))
            })
    }
}

export const changeFundsStart = () => {
    return {
        type: actionTypes.CHANGE_FUNDS_START
    }
}
export const changeFundsSuccess = (id,data) => {
    return {
        type: actionTypes.CHANGE_FUNDS_SUCCESS,
    }
}
export const changeFundsFailed = (error) => {
    return {
        type: actionTypes.CHANGE_FUNDS_FAILED, 
        error: error
    }
}
export const changeFunds = (id, updatedElement) => {
    return dispatch => {
        dispatch(changeFundsStart())
        axios.put(`https://wallet-obuhi-default-rtdb.firebaseio.com/wallets/${id}.json`, updatedElement)
            .then(response => {
                dispatch(changeFundsSuccess())
                setTimeout(() => {
                    dispatch(deleteToast())
                }, 2000)
            }).catch(error => {
                dispatch(changeFundsFailed(error))
            })
    }
}
export const deleteToast = () => {
    return {
        type: actionTypes.DELETE_TOAST,
    }
}

