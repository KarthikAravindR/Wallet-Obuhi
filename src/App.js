import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AllWallets from './Wallet/pages/AllWallets/AllWallets';
import NewWallet from './Wallet/pages/NewWallet/NewWallet';
import CheckBalance from './Wallet/pages/CheckBalance/CheckBalance';
import AddFunds from './Wallet/pages/AddFunds/AddFunds';
import SpendFunds from './Wallet/pages/SpendFunds/SpendFunds';
import AllTransaction from './Wallet/pages/AllTransaction/AllTransaction';

import Spinner from './shared/UIElements/LoadingSpinner'

const App = (props) => {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div className="centerLoading"><Spinner /></div>}>
            <Route path="/" exact >
              <AllWallets />
            </Route>
            <Route path="/NewWallet" exact >
              <NewWallet />
            </Route>
            <Route path="/CheckBalance" exact >
              <CheckBalance />
            </Route>
            <Route path="/AddFunds" exact >
              <AddFunds />
            </Route>
            <Route path="/SpendFunds" exact >
              <SpendFunds />
            </Route>
            <Route path="/AllTransaction" exact >
              <AllTransaction />
            </Route>
          </Suspense>
        </BrowserRouter>
      </div>  
    );
}
const mapStateToProps = state => {
  return {
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);