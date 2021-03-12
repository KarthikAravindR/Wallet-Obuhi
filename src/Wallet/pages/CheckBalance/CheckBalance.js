import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet} from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../../store/actions/index'
import classes from './CheckBalance.module.scss'
import SideNav from '../../../shared/Navigation/SideNav'
import LoadingIndicator from '../../../shared/UIElements/LoadingSpinner'
import Toast from '../../../shared/UIElements/Toast'

const CheckBalance = props => {
    const { onFetchWallets } = props
    React.useEffect(() => {
        onFetchWallets()
    }, [onFetchWallets])
    const [selectValue, setSelectValue] = React.useState(783.25);

    const handleSelectChange = event => {
        event.preventDefault()
        for (let wallet of props.wallets) {
            if (wallet.name === event.target.value) {
                setSelectValue(wallet.amount)
            }
        }
    }
    const submitHandler = event => {
        event.preventDefault()
        props.onCheckBalance(selectValue)
    }
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
                            {props.wallets[0] && <form onSubmit={submitHandler} className={classes.checkForm}>
                                <label htmlFor="users">User</label>
                                <select name="users" id="users" onChange={handleSelectChange}>
                                    {props.wallets.map(wallet => (
                                        <option key={wallet.id} value={wallet.name}>{wallet.name}</option>
                                    ))}
                                </select>
                                <div className={classes.addWallet}>
                                    {props.isloading && <LoadingIndicator />}
                                    <button type="submit">Submit</button>
                                </div>
                            </form>}
                            {props.balance && <p className={classes.acntBalance}>Account Balance: {props.balance}</p>}
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
        balance: state.wallet.balance,
    }
}
const mapDispatchToState = dispatch => {
    return {
        onFetchWallets: () => { dispatch(actions.Wallets()) },
        onCheckBalance: (balance) => { dispatch({ type: 'Check_Balance', balance: balance }) },
    }
}
export default connect(mapStateToProps, mapDispatchToState)(CheckBalance)