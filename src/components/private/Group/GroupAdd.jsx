import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Form, FormGroup, Label, Input, InputGroup, FormFeedback, Button, InputGroupAddon, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import LoadingButton from '../../common/LoadingButton'
import GroupCard from './GroupCard'
import './Group.css'

class GroupAdd extends Component {


  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {

      inputList : [ 'name' , 'location' , 'locationCode' , 'description' ], // list of inputs in the form

      groupForm: {
          name: {
            status: '',
            value: '',
            helpText: '',
            errorMessage: '',
            error: false,
            validate: (val)=>{
              if( val == "" ){
                return {
                  error: true,
                  errorMessage: "field required",
                  status: 'danger'
                }
              }
              else{
                return {
                  error: false,
                  errorMessage: "",
                  status: 'success'
                }
              }
              
            }
          },
        
          location: {
            status: '',
            value: '',
            helpText: '',
            errorMessage: '',
            error: false,
            validate: (val)=>{

              if( val == "" ){
                return {
                  error: true,
                  errorMessage: "field required",
                  status: 'danger'
                }
              }
              else{
                return {
                  error: false,
                  errorMessage: '',
                  status: 'success',
                }
              }
            }
          },
          locationCode: {
            status: '',
            value: '',
            helpText: '',
            errorMessage: '',
            error: false,
            validate: (val)=>{
              if( val == ''){
                
                return {
                  error: true,
                  errorMessage: "field required",
                  status: 'danger',
                }

              }
              else{
                return {
                  error: false,
                  errorMessage: "",
                  status: 'success',
                }
              }
            }
          },
          description: {
            status: '',
            value: '',
            helpText: '',
            errorMessage: '',
            error: false,
            validate: (val)=>{
              if( val == ''){
                return {
                  error: true,
                  errorMessage: "field required",
                  status: 'danger',
                }
              }
              else{
                return {
                  error: false,
                  errorMessage: "",
                  status: 'success',
                }
              }
            }
          }
      }
    }
  }

  // validate(elementInput) {
  // }

  handleSubmit(event){

    event.preventDefault()

    let fr = this.state.groupForm

    this.state.inputList.map((item, i) => {
        console.log(event.target[item].value)
        
        // console.log('key and return validate',this.state.groupForm[item].validate(event.target[item].value))

        let auxInput = {}

        auxInput = this.state.groupForm[item].validate(event.target[item].value)
        auxInput.value = event.target[item].value 
        auxInput.validate = fr[item].validate
        fr[item] = auxInput
      
        console.log('newstateInputform', auxInput )
  
        //fr = Object.assign( this.state.groupForm[item] , fr[item] );
        

      // this.setState({
      //   groupForm : newStateForm
      // })


    })

    this.setState({
      groupForm: fr
    })


    // let fr = this.state.groupForm
    // Object.keys(fr).map((key) => {
      // return encodeURIComponent(key) + '=' + encodeURIComponent(fr[key]);
      // console.log(key) 
      // console.log('key and validate',this.state.groupForm[key].validate(event.target['name'].value))
  // })
    // console.log(this.input)
    //this.props.onSubmitModal(form)
  }


  render() {

    let form = this.state.groupForm

    console.log('form rendeeeeer' , form )
    {console.log('color' , form.name.status)}
    {console.log('color' , form.name.error)}

    return (
      <Modal size={"500"} isOpen={this.props.modal} toggle={this.props.onToggle} >
      <Form onSubmit={this.handleSubmit}>
        <ModalHeader toggle={this.props.onToggle}> Create Group </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <FormGroup color={form.name.status} >
                  <Label for="name">Nombre</Label>
                  <Input  getRef={node => this.inputName = node} type="text" id="name" defaultValue={form.name.value} name="name" />
                  {form.name.error ? (<FormFeedback>{form.name.errorMessage}</FormFeedback>) : (<div></div>)}
                </FormGroup>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <FormGroup color={form.locationCode.status} >
                  <Label for="locationCode">Código Postal</Label>
                  <Input getRef={node => this.inputLocationCode = node} type="text" name="locationCode" id="locationCode" defaultValue={form.locationCode.value} />
                  {form.locationCode.error ? (<FormFeedback>{form.locationCode.errorMessage}</FormFeedback>) : (<div></div>)}
                </FormGroup>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <FormGroup color={form.location.status} >
                  <Label for="name">Location</Label>
                  <Input  getRef={node => this.inputLocation = node} type="text" name="location" id="location" defaultValue={form.location.value} />
                  {form.location.error ? (<FormFeedback>{form.location.errorMessage}</FormFeedback>) : (<div></div>)}
                </FormGroup>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <FormGroup color={form.description.status} >
                  <Label for="name">Descripción</Label>
                  <Input getRef={node => this.inputTextarea = node} type="textarea" name="description" id="description" defaultValue={form.description.value} />
                  {form.description.error ? (<FormFeedback>{form.description.errorMessage}</FormFeedback>) : (<div></div>)}
                </FormGroup>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {this.props.sendingData
            ? (<LoadingButton buttonStyle={'primary'} block={false} />)
            : (<Button /*disabled={ !this.state.groupForm.validForm }*/ type="submit" color="primary" > Send </Button>)}
          <Button color="secondary" onClick={this.props.onToggle}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
    )

  }


}

export default GroupAdd
