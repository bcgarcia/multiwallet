import React , {Component , PropTypes, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Register from './Register'
import * as userActions from '../../actions/userActions'

class RegisterContainer extends Component{
    
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleSubmit(user){
        //this.props.userActions.loginUser(user)
    }

    handleOnChangeUsename(event){

        
        /*

        */
    }

    render(){
        return(<div><Register onSubmit={this.handleSubmit} /></div>)
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
