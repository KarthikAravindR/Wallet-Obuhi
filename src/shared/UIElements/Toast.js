import React from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from '@fortawesome/free-solid-svg-icons';

import './Toast.scss'

const Toast = (props) =>  {
        return (
            <div>
                <div className="Toast" style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                    <div className="delete1" style={{margin:"0 4px"}}><FontAwesomeIcon icon={faCheck}/></div>
                    <div>Transaction Successful</div>
                </div>
            </div >
        );
}
const mapStateToProps = state => {
    return{
        show: state.wallet.transactionsuccess
    }
}

export default connect(mapStateToProps)(Toast)
