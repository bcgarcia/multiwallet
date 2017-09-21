import React , {Component , PropTypes, } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Register from './Register'
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
            name:{
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
       /* event.preventDefault
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
        this.emitStateChange(updatedState)*/
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
        return(<div><Register onSubmit={this.handleSubmit} /></div>)
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
