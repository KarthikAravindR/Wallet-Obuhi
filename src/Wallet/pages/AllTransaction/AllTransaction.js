import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet} from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../../store/actions/index'
import classes from './AllTransaction.module.scss'
import SideNav from '../../../shared/Navigation/SideNav'
import AllTransactionTable from '../../components/AllTransactionForm/AllTransactionTable'
import Toast from '../../../shared/UIElements/Toast'

const AllTransaction = props => {
    const { onFetchTransactions } = props
    React.useEffect(() => {
        onFetchTransactions()
    }, [onFetchTransactions])
    return (
        <div className={classes.container}>
            <Toast />
            <div id={classes.oval}>
                <div className={classes.wallet}>
                    <div className={classes.Toolbar}> <FontAwesomeIcon style={{marginRight: "7px"}} icon={faWallet}/>Personal Wallet</div>
                    <div className={classes.walletcontent}>
                        <div className={classes.sidenav}>
                            <SideNav />
                        </div>
                        <div className={classes.content}>
                            {props.transactions[0] ? <AllTransactionTable transactions={props.transactions} /> : <p>No Transaction made</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions,
    }
}
const mapDispatchToState = dispatch => {
    return {
        onFetchTransactions: () => { dispatch(actions.fetchTransactions()) },
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AllTransaction)
