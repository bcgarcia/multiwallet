import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button,InputGroupAddon,InputGroup } from 'reactstrap'
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
            <Form onSubmit={this.props.onSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <FormGroup color={this.props.name.state}>
                      <Label for="username">Nombre</Label>
                      <Input onChange={this.props.onChangeName} type="text"  id="name" state={this.props.name.state} name="name" placeholder="Cual es el nombre del nuevo Messi" />
                      {this.props.name.error ? (<FormFeedback>{this.props.name.errorMessage}</FormFeedback>) : (<div></div>)}
                    </FormGroup>
                  </div>
                </div>
                <div className="col-5">
                  <div className="form-group">
                  <FormGroup color={this.props.birthdate.state}>
                      <Label for="username">F.Nacimiento</Label>
                      <Input type="text"  id="birthdate" state={this.props.birthdate.state} name="birthdate" placeholder="Cuantas temporadas?" />
                      {this.props.birthdate.error ? (<FormFeedback>{this.props.birthdate.errorMessage}</FormFeedback>) : (<div></div>)}
                    </FormGroup>
                  </div>
                </div>
                <div className="col-7">
                <div className="form-group">
                  <FormGroup color={this.props.email.state}>
                      <Label for="username">Email</Label>
                      <InputGroup>
                      <Input onChange={this.props.onChangeEmail} type="text"  id="email" state={this.props.email.state} name="email" placeholder="Tu email" />
                      { this.props.app.currentlySending && <InputGroupAddon><span className="fa fa-spinner fa-spin"></span></InputGroupAddon>}
                      </InputGroup>
                      {this.props.email.error ? (<FormFeedback>{this.props.email.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                  </div>
                </div>
                <div className="col-12">
                <div className="form-group">
                  <FormGroup color={this.props.password.state}>
                      <Label for="password">Contraseña</Label>
                      <InputGroup>
                      <Input onChange={this.props.onChangePassword} type="password"  id="password" state={this.props.password.state} name="password" placeholder="Tu clave de acceso" />
                      {/* this.props.password.error && <InputGroupAddon><span className="fa fa-spinner fa-spin"></span></InputGroupAddon>*/}
                      </InputGroup>
                      {this.props.password.error ? (<FormFeedback>{this.props.password.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                  </div>
                </div>
                  {
                     !this.props.password.error && this.props.password.value != '' && 
                      (<div className="col-12">
                      <div className="form-group">
                        <FormGroup color={this.props.rpassword.state}>
                            <Label for="rpassword">Repite contraseña</Label>
                            <Input type="password"  id="rpassword" state={this.props.rpassword.state} name="email" placeholder="Vuelve a introducirla" />
                            {this.props.rpassword.error ? (<FormFeedback>{this.props.rpassword.errorMessage}</FormFeedback>) : (<div></div>)}
                        </FormGroup>
                      </div>
                      </div>)
                    }
              </div>
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

function mapStateToProps(state){
  console.log(state)
      return{
          app       : state.app,
          form      : state.formRegister,
          name      : state.formRegister.name,
          birthdate : state.formRegister.birthdate,
          email     : state.formRegister.email,
          password  : state.formRegister.password,
          rpassword : state.formRegister.rpassword,
      }
  }

export default connect( mapStateToProps , null )(Register)