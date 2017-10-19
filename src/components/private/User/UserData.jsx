import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback, FormText, InputGroupAddon, InputGroup } from 'reactstrap'
import LoadingButton from '../../common/LoadingButton'
import DatePicker from 'react-datepicker'
// import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './userdata.css'

class UserData extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const formData = {
        id          : this.props.user.id,
        name        : this.nameInput.value,
        email       : this.emailInput.value,
        password    : null,
        rpassword   : null,
        birthDate   : this.props.selectedBirthdate._i
    };
    formData.password = this.passwordInput.value !== '' ? this.passwordInput.value : null
    formData.rpassword = this.rpasswordInput !== undefined ? this.rpasswordInput.value : null
    this.props.onSubmitModal(formData)
  }

  render() {
    return (<div>
      <Modal size={"500"} isOpen={this.props.modal} toggle={this.props.onModal} >
        <Form onSubmit={this.handleSubmit}>
        <ModalHeader toggle={this.props.onModal}>Modify {this.props.user.displayName}</ModalHeader>
        <ModalBody>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <FormGroup color={this.props.formState.name.state}>
                    <Label for="name">Nombre completo</Label>
                    <Input getRef={node => this.nameInput = node} type="text" id="name" defaultValue={this.props.user.displayName} name="name" />
                    {this.props.formState.name.error ? (<FormFeedback>{this.props.formState.name.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <FormGroup color={this.props.formState.birthdate.state}>
                    <Label for="username">F.Nacimiento</Label>
                   <DatePicker
                      popoverAttachment='bottom left'
                      popoverTargetAttachment='top left'
                      dateFormat="DD-MM-YYYY"
                      className={'form-control'}
                      selected={this.props.selectedBirthdate}
                      onChange={this.props.onChangeBirthdate} />
                    {this.props.formState.birthdate.error ? (<FormFeedback>{this.props.formState.birthdate.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <FormGroup color={this.props.formState.email.state}>
                    <Label for="username">Email</Label>
                    <InputGroup>
                      <Input  onChange={this.props.onChangeUsername} getRef={node => this.emailInput = node} defaultValue={this.props.user.email} type="text" id="email"  name="email" />
                      {this.props.sendingData && <InputGroupAddon><span className="fa fa-spinner fa-spin"></span></InputGroupAddon>}
                    </InputGroup>
                    {this.props.formState.email.error ? (<FormFeedback>{this.props.formState.email.errorMessage}</FormFeedback>) : (<div></div>)}
                  </FormGroup>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <FormGroup color={this.props.formState.password.state}>
                    <Label for="password">Contraseña</Label>
                    <InputGroup>
                      <Input getRef={node => this.passwordInput = node} onChange={this.props.onChangePassword} type="password" id="password" state={this.props.formState.password.state} name="password" />
                      {/* this.props.password.error && <InputGroupAddon><span className="fa fa-spinner fa-spin"></span></InputGroupAddon>*/}
                    </InputGroup>
                    {this.props.formState.password.error ? (<FormFeedback>{this.props.formState.password.errorMessage}</FormFeedback>) : (<div><FormText color="muted">{'Si no quieres cambiar la contraseña deja el campo el blanco'}</FormText></div>)}
                  </FormGroup>
                </div>
              </div>
              {
                (!this.props.formState.password.error && this.props.formState.password.value != '') ?
                  (<div className="col-12">
                    <div className="form-group">
                      <FormGroup color={this.props.formState.rpassword.state}>
                        <Label for="rpassword">Repite contraseña</Label>
                        <Input onChange={this.props.onChangePassword}  getRef={node => this.rpasswordInput = node} type="password" id="rpassword" state={this.props.formState.rpassword.state} name="email" />
                        {this.props.formState.rpassword.error ? (<FormFeedback>{this.props.formState.rpassword.errorMessage}</FormFeedback>) : (<div></div>)}
                      </FormGroup>
                    </div>
                  </div>) : (<div></div>)
              }
            </div>

        </ModalBody>
        <ModalFooter>
          {
            this.props.currentlySending
            ? (<LoadingButton buttonStyle={'primary'} block={false} />)
            : (<Button type="submit" color="primary" > Update </Button>)
          }
          <Button color="secondary" onClick={this.props.onModal}>Cancel</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </div>)
  }

}

export default UserData