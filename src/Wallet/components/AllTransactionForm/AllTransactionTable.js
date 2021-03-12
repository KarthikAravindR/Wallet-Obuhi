import React from 'react'

import classes from './AllTransactionTable.module.scss'

const AllTransactionTable = props => {
    return (
        <div className={classes.container}>
            <div className={classes.tableHeader}>
                <div className={classes.tableContent}>Name</div>
                <div className={classes.tableContent}>Date</div>
                <div className={classes.tableContent}>Amount(Rs)</div>
                <div className={classes.tableContent}>Balance(Rs)</div>
            </div>
            {props.transactions.map(transaction => (
                <div className={classes.tableHeader} key={transaction.id}>
                    <div className={classes.tableElementContent}>{transaction.name}</div>
                    <div className={classes.tableElementContent}>{transaction.date}</div>
                    <div className={classes.tableElementContent}>{transaction.amount}</div>
                    <div className={classes.tableElementContent}>{transaction.balance}</div>
                </div>
            ))}
        </div>
    )
}
export default AllTransactionTable