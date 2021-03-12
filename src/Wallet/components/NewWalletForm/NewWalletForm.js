import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import classes from './NewWalletForm.module.scss'
import * as actions from '../../../store/actions/index'
import LoadingIndicator from '../../../shared/UIElements/LoadingSpinner'

const NewWalletForm = props => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')

    const submitHandler = event => {
        event.preventDefault()
        props.onAddWallet({name: name, phone: parseInt(phone), amount: parseFloat(amount)})
        props.history.push('/')
    }
    return (
        <div>
            <form onSubmit={submitHandler} className={classes.newwalletform}>
                <div className={classes.inputarea}>
                    <label>Name</label>
                    <div className={classes.inputelement}>
                        <input type="text" rows="2" value={name} onChange={event => { setName(event.target.value) }} />
                    </div>
                </div>
                <div className={classes.inputarea}>
                    <label>Phone</label>
                    <div className={classes.inputelement}>
                        <input type="number" rows="2" value={phone} onChange={event => { setPhone(event.target.value) }} />
                    </div>
                </div>
                <div className={classes.inputarea}>
                    <label>Amount(RS)</label>
                    <div className={classes.inputelement}>
                        <input step=".01" type="number" rows="2" value={amount} onChange={event => { setAmount(event.target.value) }} />
                    </div>
                </div>
                <div className={classes.addWallet}>
                    {props.isloading && <LoadingIndicator />}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isloading: state.wallet.isLoading,
    }
}
const mapDispatchToState = dispatch => {
    return{
        onAddWallet: (wallet) => {dispatch(actions.addWallet(wallet))},
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToState)(NewWalletForm))
