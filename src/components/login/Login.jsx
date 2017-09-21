import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button } from 'reactstrap'
import LoadingButton from '../common/LoadingButton'
//CSS FILES
import './login.css';
import '../../css/adminer.css'
import '../../css/portlet.css'


class Login extends Component {
    
    constructor(props) {
        super(props)    
    }

    render() {

        return (
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="text-center">
                        {<h1 className="login-brand-text">Brand</h1>}
                    </div>
                    <div className="portlet">
                        <div className="portlet-title">
                            <div className="caption">
                                {/*<span className="fa fa-plus"></span>*/}
                                <span className="caption-subject text-uppercase"> Login </span>
                                <span className="caption-helper"> autenticarse en el sistema...</span>
                            </div>
                        </div>
                        <div className="portlet-body">
                           
                        <Form onSubmit={this.props.form.onSubmit}>
                        <FormGroup color={this.props.username.state}>
                          <Label for="username">Email</Label>
                          <Input onChange={this.props.onChangeUsername} type="text"  id="username" state={this.props.username.state} name="username" placeholder="Introduce tu email" />
                          {this.props.username.error ? (<FormFeedback>{this.props.username.errorMessage}</FormFeedback>) : (<div></div>)}
                        </FormGroup>
                        
                        <FormGroup color={this.props.password.state}>
                            <Label for="password">Password</Label>
                            <Input required type="password"  id="password" state={this.props.password.state} name="password" onChange={this.props.onChangePassword} placeholder="Introduce tu contraseña" />
                            {this.props.password.error ? (<FormFeedback>{this.props.password.errorMessage}</FormFeedback>) : (<div></div>)}
                        </FormGroup>
                        {
                            this.props.app.currentlySending 
                            ? ( <LoadingButton buttonStyle = {'primary'} /> ) 
                            : (<Button type="submit" color="primary" block > Login </Button>)
                        }
                      </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        app: state.app,
        form: state.formCredentials,
        username: state.formCredentials.username,
        password: state.formCredentials.password,
    }
}


export default connect(mapStateToProps, null)(Login)