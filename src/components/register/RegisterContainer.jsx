import React , {Component , PropTypes, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Register from './Register'
import * as userActions from '../../actions/userActions'
//import * as notificationActions from '../actions/notificationActions'

class LoginRegisterContainer extends Component{
    
    constructor(props){
        super(props)
    }

    render(){

        return(<div>
            <Register />
        </div>)
    }
}


function mapStateToProps(state){
    return {
        login: state.user.login,
        register: state.user.register,
        loading: state.user.loading,
        error: state.user.error
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterContainer)
