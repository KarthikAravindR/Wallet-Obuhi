import React from 'react'

import classes from './AllWalletsTable.module.scss'

const AllWalletsTable = props => {
    return (
        <div className={classes.container}>
            <div className={classes.tableHeader}>
                <div className={classes.tableContent}>User Id</div>
                <div className={classes.tableContent}>Name</div>
                <div className={classes.tableContent}>Phone</div>
                <div className={classes.tableContent}>Balance(Rs)</div>
            </div>
            {props.wallets.map(wallet => (
                <div className={classes.tableHeader} key={wallet.id}>
                    <div className={classes.tableElementContent}>{wallet.displayid}</div>
                    <div className={classes.tableElementContent}>{wallet.name}</div>
                    <div className={classes.tableElementContent}>{wallet.phone}</div>
                    <div className={classes.tableElementContent}>{wallet.amount}</div>
                </div>
            ))}
        </div>
    )
}
export default AllWalletsTable