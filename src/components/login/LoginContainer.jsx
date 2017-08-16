import React , {Component , PropTypes, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Login from './Login'
import * as userActions from '../../actions/userActions'

class LoginContainer extends Component{
    
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(user){
        this.props.userActions.loginUser(user)
    }

    render(){
        return(<div><Login onSubmit={this.handleSubmit} /></div>)
    }
}


function mapStateToProps(state){
    return {
        
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
