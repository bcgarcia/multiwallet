import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button } from 'reactstrap'
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
                      <Input type="text"  id="email" state={this.props.email.state} name="email" placeholder="Tu email" />
                      {this.props.email.error ? (<FormFeedback>{this.props.birthdate.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                  </div>
                </div>

              </div>
  
              <div className="form-group">
              </div>
              <div className="form-group">
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
          app : state.app,
          form : state.formRegister,
          name : state.formRegister.name,
          birthdate : state.formRegister.birthdate,
          email : state.formRegister.email,
      }
  }

export default connect( mapStateToProps , null )(Register)