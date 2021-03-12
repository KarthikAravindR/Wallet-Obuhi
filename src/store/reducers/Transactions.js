import * as actionTypes from '../actions/actionTypes'

const initialState = {
    transactions: [],
    isLoading: false,
    error: null,
    successfullydeleted: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRANSACTION_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: action.localTransaction,
                isLoading: false
            }
        case actionTypes.FETCH_TRANSACTION_FAILED:
            return {
                isLoading: false,
                error: action.error
            }
        case actionTypes.ADD_TRANSACTION_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.ADD_TRANSACTION_SUCCESS:
            const newTransactionLog = {
                ...action.transactionLog,
                id:action.id
            }
            return {
                ...state,
                isLoading: false,
                transactions: state.transactions.concat(newTransactionLog)
            }
        case actionTypes.ADD_TRANSACTION_FAILED:
            return {
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer