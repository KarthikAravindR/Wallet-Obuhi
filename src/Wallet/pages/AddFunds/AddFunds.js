import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet} from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../../store/actions/index'
import SideNav from '../../../shared/Navigation/SideNav'
import LoadingIndicator from '../../../shared/UIElements/LoadingSpinner'
import classes from './AddFunds.module.scss'
import Toast from '../../../shared/UIElements/Toast'

const AddFunds = props => {
    const { onFetchWallets } = props
    React.useEffect(() => {
        onFetchWallets()
    }, [onFetchWallets])

    const [selectValue, setSelectValue] = React.useState('Name 1');
    const [amount, setAmount] = React.useState('')

    const handleSelectChange = event => {
        setSelectValue(event.target.value)
    }
    const submitHandler = event => {
        event.preventDefault()
        let updatedElement, id, transactionLog
        let date = new Date()
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        let TransactionDate = date.getDate().toString() + ' ' + months[date.getMonth()] + ', ' + strTime
        for (let wallet of props.wallets) {
            if (wallet.name === selectValue) {
                updatedElement = {
                    name: wallet.name,
                    phone: wallet.phone,
                    amount: parseFloat(wallet.amount) + parseFloat(amount)
                }
                id = wallet.id
            }
        }
        props.onAddFunds(id, updatedElement)
        transactionLog = {
            name: updatedElement.name,
            date: TransactionDate,
            balance: updatedElement.amount,
            amount: `+${amount}`
        }
        props.onlogTransaction(transactionLog)
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
                            {props.wallets[0] && <form onSubmit={submitHandler} className={classes.addForm}>
                                <label htmlFor="users">User</label>
                                <select name="users" id="users" onChange={handleSelectChange}>
                                    {props.wallets.map(wallet => (
                                        <option key={wallet.id} value={wallet.name}>{wallet.name}</option>
                                    ))}
                                </select>
                                <div className={classes.addinputarea}>
                                    <label>Amount(RS)</label>
                                    <div className={classes.addinputelement}>
                                        <input step=".01" type="number" rows="2" value={amount} onChange={event => { setAmount(event.target.value) }} />
                                    </div>
                                </div>
                                <div className={classes.addWallet}>
                                    {props.isloading && <LoadingIndicator />}
                                    <button type="submit">Submit</button>
                                </div>
                            </form>}
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
        onAddFunds: (id, updatedElement) => { dispatch(actions.changeFunds(id, updatedElement)) },
        onlogTransaction: (transactionLog) => { dispatch(actions.addTransactions(transactionLog)) },
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AddFunds)
