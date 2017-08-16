import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {Col,Form,FormControl , FormGroup , ControlLabel,HelpBlock,Jumbotron} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoadingButton from '../common/LoadingButton'
import ErrorMessages from '../common/ErrorMessages'
import * as formCredentialsActions from '../../actions/formCredentialsActions'

class CredentialsForm extends Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        
        const updatedState = {
            username:{
                value: ''
            },
            password:{
                value: ''
            }
        }
    }

    handleChangeUsername(event){
        event.preventDefault

        console.log(event.target.value)

    }        
    handleChangePassword(event){
        event.preventDefault

        //const {username, password} = this.refs;

    }        

    // throw the action that change the form state to the application state
    actionChange(newState) {
        this.props.dispatch(changeForm(newState));
    }

    handleSubmit(event){
        event.preventDefault()
        let user = {
            email : '',
            password : '',

        }
        this.props.onSubmit(user)

    }


    render(){
        return (
            
            <div className="container-fluid">
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
        formActions : bindActionCreators( formCredentialsActions , dispatch),
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(CredentialsForm)

