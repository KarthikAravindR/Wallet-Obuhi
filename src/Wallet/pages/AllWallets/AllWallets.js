import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet} from '@fortawesome/free-solid-svg-icons';


import * as actions from '../../../store/actions/index'
import AllWalletsTable from '../../components/AllWalletsTable/AllWalletsTable'
import classes from './AllWallets.module.scss'
import SideNav from '../../../shared/Navigation/SideNav'
import Toast from '../../../shared/UIElements/Toast'

const AllWallets = props => {
    const { onFetchWallets } = props
    React.useEffect(() => {
        onFetchWallets()
    }, [onFetchWallets])
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
                            {props.wallets[0] && <AllWalletsTable wallets={props.wallets} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        wallets: state.wallet.wallets,
    }
}
const mapDispatchToState = dispatch => {
    return {
        onFetchWallets: () => { dispatch(actions.Wallets()) },
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AllWallets)