import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Input, Button,FormControl, Checkbox,ControlLabel } from 'react-bootstrap';
import * as userActions from '../../actions/userActions'
import LoadingButton from '../common/LoadingButton'
//CSS FILES
import './Register.css';
import '../../css/adminer.css'
import '../../css/portlet.css'


class Register extends Component{
  constructor(props){
    super(props)
  }

  render(){

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
							<span className="caption-subject text-uppercase"> Registro </span>
							<span className="caption-helper"> darse de alta en el sistema...</span>
						</div>
						
					</div>
					<div className="portlet-body">
            <form role="form" onSubmit={this.props.onSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <ControlLabel>Nombre</ControlLabel>
                    <FormControl
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="name"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                      <ControlLabel>F.Nacimiento</ControlLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        placeholder="F.Nacimiento"
                        name="birthDate"
                      />
                  </div>
                </div>
                <div className="col-8">
                <div className="form-group">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>

              </div>
  
              <div className="form-group">
              <ControlLabel>Contraseña</ControlLabel>
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="form-group">
              <ControlLabel>Repite Contraseña</ControlLabel>
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="rpassword"
                />
              </div>
              {/*<Checkbox label="Remember Me" > Remember Me </Checkbox>*/}
              {
                this.props.app.currentlySending 
                ? ( <LoadingButton buttonStyle = {'primary'} /> ) 
                : (<Button type="submit" bsStyle="primary" block>Register</Button>)
              }


              
          </form>
  
          
          </div>
				</div>  
      </div>
      </div>
  
    );
  }
}


function mapStateToProps(state){
  
      return{
          app : state.app,
          form : state.formRegister
      }
  }
  
  function mapDispatchToProps(dispatch){
  
      return{
          userActions : bindActionCreators(userActions , dispatch)
      }
  }

export default connect( mapStateToProps , mapDispatchToProps )(Register)