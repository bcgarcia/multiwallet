import React , {Component , PropTypes, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Register from './Register'
import validator from '../../utils/validator'
import * as userActions from '../../actions/userActions'

class RegisterContainer extends Component{
    
    constructor(props){
        super(props)
        document.title = 'Register page';
        this.handleSubmit           = this.handleSubmit.bind(this)
        this.handleChangeUsername   = this.handleChangeUsername.bind(this)
        this.handleChangePassword   = this.handleChangePassword.bind(this)
    }


    
    handleChangeUsername(event){
        event.preventDefault
        let inputValue = event.target.value
        let inputState = null
        let error = false
        let errorMsg = null
        let form ={
            email:{
                value : inputValue,
                state : inputState,
                error: error,
                errorMessage : errorMsg
            }
        }
        if(validator.validEmail(inputValue) && !validator.isEmpty(inputValue) ){
            this.props.userActions.checkAvailableEmail(form.email)
        }
        else{
            form.email.inputState = 'danger'
            form.email.error = true
            form.email.errorMsg = "No es un formato válido de email o está vacío"
        }
        let updatedState = this.mergeWithCurrentState(form)
        this.emitStateChange(updatedState)
    }     
    
    handleChangePassword(event){
        event.preventDefault
        
        let form = { 
            password:{
                value : '',
                state : null,
                error: null,
                errorMessage : ""
            },
            rpassword:{
                value : '',
                state : null,
                error: null,
                errorMessage : ''
            }
        }
        let error = false
        let errorMsg = null
        let inputValue = event.target.value
        let inputState = null
        console.log(event.target.id)
        
        if(event.target.id == 'password'){
            if(validator.validPassword(inputValue) ){
                inputState = 'success'
            }
            else{
                inputState = 'danger'
                error = true
                errorMsg = "No cumple el formato válido para contraseña"
            }

            form.password.value = event.target.value,
            form.password.state = inputState,
            form.password.error =  error,
            form.password.errorMessage = errorMsg
        }
        else if(event.target.id == 'rpassword'){

            if(validator.isSamePassword(this.props.formRegister.password.value, this.props.rpassword.value) ){
                inputState = 'success'
            }
            else{
                inputState = 'danger'
                error = true
                errorMsg = "Las contraseñas no son iguales"
            }
            form.rpassword.value = event.target.value,
            form.rpassword.state = inputState,
            form.rpassword.error = error,
            form.rpassword.errorMessage = errorMsg
        }
        var updatedState = this.mergeWithCurrentState(form)
        this.emitStateChange(updatedState)
    }     

    // Emits the change of the form state to the application state
    emitStateChange(newState){
        return this.props.userActions.changeRegisterForm(newState);
    }

    // Merges the current state with a change
    mergeWithCurrentState(stateChange) {
        
        return Object.assign(this.props.formRegister, stateChange);
    }

    handleSubmit(user){
        //this.props.userActions.loginUser(user)
    }


    render(){
        return(<div><Register onChangePassword={this.handleChangePassword} onChangeEmail={this.handleChangeUsername} onSubmit={this.handleSubmit} /></div>)
    }
}


function mapStateToProps(state){
    return {
        app             : state.app,
        formRegister    : state.formRegister
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
