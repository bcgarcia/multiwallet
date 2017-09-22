import React , {Component  } from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Login from './Login'
import * as userActions from '../../actions/userActions'

import validator from '../../utils/validator'

class LoginContainer extends Component{
    
    constructor(props){
        super(props)
        document.title = 'Login page';
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

   
    handleChangeUsername(event){
        event.preventDefault
        let inputValue = event.target.value
        let inputState = null
        let error = false
        let errorMsg = null
        if(validator.validEmail(inputValue) && !validator.isEmpty(inputValue) ){
            inputState = 'success'
            error = false
            errorMsg = null
        }
        else{
            inputState = 'danger'
            error = true
            errorMsg = "No es un formato válido de email o está vacío"
        }
        let form ={
            username:{
                value : inputValue,
                state : inputState,
                error: error,
                errorMessage : errorMsg
            }
        }
        let updatedState = this.mergeWithCurrentState(form)
        this.emitStateChange(updatedState)
    }     
    
    
    handleChangePassword(event){
        event.preventDefault
        let error = false
        let errorMsg = null
        let inputValue = event.target.value
        let inputState = null
        if(validator.validPassword(inputValue) ){
            inputState = 'success'
        }
        else{
            inputState = 'danger'
            error = true
            errorMsg = "No cumple el formato válido para contraseña"
        }
        var form ={
            password:{
                value : event.target.value,
                state : inputState,
                error: error,
                errorMessage : errorMsg
            }
        }
        var updatedState = this.mergeWithCurrentState(form)
        this.emitStateChange(updatedState)
    }     
    
    // Emits the change of the form state to the application state
    emitStateChange(newState){
        return this.props.userActions.changeCredentialsForm(newState);
    }

    // Merges the current state with a change
    mergeWithCurrentState(stateChange) {
        
        return Object.assign(this.props.formCredentials, stateChange);
    }

    // throw the action that change the form state to the application state
    handleSubmit(event){
        event.preventDefault()

        //TODO: validar form
        
        this.props.userActions.loginUser({email : this.props.formCredentials.username.value, password : this.props.formCredentials.password.value})
    }


    render(){
        return(<div><Login 
        onChangePassword={this.handleChangePassword}
        onChangeUsername={this.handleChangeUsername}
        onSubmit={this.handleSubmit} /></div>)
    }
}


function mapStateToProps(state){
    return {
        app             : state.app,
        formCredentials : state.formCredentials
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
