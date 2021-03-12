import * as actionTypes from '../actions/actionTypes'

const initialState = {
    wallets: [],
    balance: null,
    isLoading: false,
    error: null,
    transactionsuccess: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WALLETS_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_WALLETS_SUCCESS:
            return {
                ...state,
                wallets: action.wallets,
                isLoading: false
            }
        case actionTypes.FETCH_WALLETS_FAILED:
            return {
                isLoading: false,
                error: action.error
            }
        case actionTypes.ADD_WALLET_START:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.ADD_WALLET_SUCCESS:
            const newOrder = {
                ...action.data,
                id:action.id
            }
            return {
                ...state,
                wallets: state.wallets.concat(newOrder),
                isLoading: false,
            }
        case actionTypes.ADD_WALLET_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.CHANGE_FUNDS_START:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.CHANGE_FUNDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                transactionsuccess: true
            }
        case actionTypes.CHANGE_FUNDS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.DELETE_TOAST:
            return {
                ...state,
                isLoading: false,
                transactionsuccess: false
            }
        case 'Check_Balance':
            return{
                ...state,
                balance: action.balance
            }
        default:
            return state
    }
}

export default reducer