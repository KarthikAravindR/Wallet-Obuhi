import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet} from '@fortawesome/free-solid-svg-icons';

import classes from './NewWallet.module.scss'
import NewWalletForm from '../../components/NewWalletForm/NewWalletForm'
import SideNav from '../../../shared/Navigation/SideNav'
import Toast from '../../../shared/UIElements/Toast'

const NewWallet = props => {
    return (
        <div className={classes.container}>
            <Toast />
            <div id={classes.oval}>
                <div className={classes.wallet}>
                    <div className={classes.Toolbar}><FontAwesomeIcon style={{marginRight: "7px"}} icon={faWallet}/> Personal Wallet</div>
                    <div className={classes.walletcontent}>
                        <div className={classes.sidenav}>
                            <SideNav />
                        </div>
                        <div className={classes.content}>
                            <NewWalletForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWallet