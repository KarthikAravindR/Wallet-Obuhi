import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchTransactionsStart = () => {
    return {
        type: actionTypes.FETCH_TRANSACTION_START
    }
}
export const fetchTransactionsSuccess = (localTransaction) => {
    return {
        type: actionTypes.FETCH_TRANSACTION_SUCCESS,
        localTransaction: localTransaction
    }
}
export const fetchTransactionsFailed = (error) => {
    return {
        type: actionTypes.FETCH_TRANSACTION_FAILED,
        error: error
    }
}
export const fetchTransactions = (token,userId) => {
    return dispatch => {
        dispatch(fetchTransactionsStart())
        axios.get('https://wallet-obuhi-default-rtdb.firebaseio.com/transactions.json')
            .then(response => {
                const localTransaction = []
                for (let key in response.data) {
                    localTransaction.push({
                        id: key,
                        name: response.data[key].name,
                        date: response.data[key].date,
                        amount: response.data[key].amount,
                        balance: response.data[key].balance,
                    })
                }
                dispatch(fetchTransactionsSuccess(localTransaction))
            }).catch(error => {
                dispatch(fetchTransactionsFailed(error))
            })
    }
}

export const addTransactionsStart = () => {
    return {
        type: actionTypes.ADD_TRANSACTION_START
    }
}
export const addTransactionsSuccess = (id, transactionLog) => {
    return {
        type: actionTypes.ADD_TRANSACTION_SUCCESS,
        id: id,
        transactionLog: transactionLog
    }
}
export const addTransactionsFailed = (error) => {
    return {
        type: actionTypes.ADD_TRANSACTION_FAILED,
        error: error
    }
}
export const addTransactions = (transactionLog) => {
    return dispatch => {
        dispatch(addTransactionsStart())
        axios.post('https://wallet-obuhi-default-rtdb.firebaseio.com/transactions.json', transactionLog)
            .then(response => {
                dispatch(addTransactionsSuccess(response.data.name,transactionLog))
            }).catch(error => {
                dispatch(addTransactionsFailed(error))
            })
    }
}