import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {Col,Form,FormControl , FormGroup , ControlLabel,HelpBlock,Jumbotron} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoadingButton from '../common/LoadingButton'
import ErrorMessages from '../common/ErrorMessages'
import validator from '../../utils/validator'
import * as formCredentialsActions from '../../actions/formCredentialsActions'
import * as userActions from '../../actions/userActions'


class CredentialsForm extends Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleChangeUsername(event){
        event.preventDefault
        let inputValue = event.target.value
        let inputState = null
        
        if(validator.validEmail(inputValue) && !validator.isEmpty(inputValue) ){
            inputState = 'success'
        }
        
        let form ={
            username:{
                value : inputValue,
                state : inputState
            }
        }
        let updatedState = this.mergeWithCurrentState(form)
        this.emitStateChange(updatedState)
    }     
    
    
    handleChangePassword(event){
        event.preventDefault
        let inputValue = event.target.value
        let inputState = null
        if(validator.validPassword(inputValue) ){
            inputState = 'success'
        }
        var form ={
            password:{
                value : event.target.value,
                state : inputState
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
        this.props.onSubmit({email : this.props.formCredentials.username.value, password : this.props.formCredentials.password.value})
    }

    render(){
        return (
            <div className="container-fluid">
                {console.log('formulario')}
                {console.log(this.props.formCredentials.username.state)}
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ErrorMessages />
                        <form className="form-page__form-wrapper" onSubmit={this.handleSubmit} >
                        
                            <FormGroup validationState={this.props.formCredentials.username.state} controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl onChange={this.handleChangeUsername} type="email" placeholder="Email" />
                            </Col>
                            </FormGroup>

                            <FormGroup validationState={this.props.formCredentials.password.state} controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl onChange={this.handleChangePassword} type="password" placeholder="Password" />
                            </Col>
                            </FormGroup>
                            <FormGroup>
                            <Col smOffset={2} sm={10}>
                                {this.props.app.currentlySending ? (
                                    <LoadingButton />
                                ) : (
                                    <button className="btn btn-primary btn-block form__submit-btn" type="submit">{this.props.btnText}</button>
                                )}
                            </Col>
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        app : state.app,
        formCredentials : state.formCredentials
    }
}

function mapDispatchToProps(dispatch){

    return{
        userActions : bindActionCreators( userActions , dispatch),
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(CredentialsForm)

