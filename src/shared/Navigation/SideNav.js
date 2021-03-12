import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './SideNav.module.scss'

const SideNav = props => {
    return (
        <div className={classes.container}>
            <NavLink to='/' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>All Wallets</NavLink>
            <NavLink to='/NewWallet' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>New Wallets</NavLink>
            <NavLink to='/CheckBAlance' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>Check Balance</NavLink>
            <NavLink to='/AddFunds' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>Add Funds</NavLink>
            <NavLink to='/SpendFunds' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>Spend Funds</NavLink>
            <NavLink to='/AllTransaction' exact className={classes.sideNavLink} activeClassName={classes.activeSideNavLink}>All Transaction</NavLink>
        </div>
    )
}

export default SideNav