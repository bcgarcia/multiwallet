import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, InputGroup, FormFeedback, Button, InputGroupAddon, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import LoadingButton from '../../common/LoadingButton'
import GroupCard from './GroupCard'
import { errorFormElements } from '../../../utils/utils'
import './Group.css'

class GroupAdd extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)

        this.state = {

            inputList: ['name', 'location', 'locationCode', 'description'], // list of inputs in the form

            groupForm: {
                name: {
                    status: '',
                    value: '',
                    helpText: '',
                    errorMessage: '',
                    error: false,
                    validate: (val) => {
                        if (val == "") {
                            return {
                                value: val,
                                error: true,
                                errorMessage: "field required",
                                status: 'danger'
                            }
                        }
                        else {
                            return {
                                value: val,
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
                    validate: (val) => {

                        if (val == "") {
                            return {
                                value: val,
                                error: true,
                                errorMessage: "field required",
                                status: 'danger'
                            }
                        }
                        else {
                            return {
                                value: val,
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
                    validate: (val) => {
                        if (val == '') {

                            return {
                                value: val,
                                error: true,
                                errorMessage: "field required",
                                status: 'danger',
                            }

                        }
                        else {
                            return {
                                value: val,
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
                    validate: (val) => {
                        if (val == '') {
                            return {
                                value: val,
                                error: true,
                                errorMessage: "field required",
                                status: 'danger',
                            }
                        }
                        else {
                            return {
                                value: val,
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

    validate(input) {

        //let fr = this.state.groupForm
        /*
        Object.keys(fr).map((key) => {
          console.log('key',key) 
          //console.log('key and validate',this.state.groupForm[key].validate(event.target.value))
        })*/
        let fr = Object.assign(this.state.groupForm[input.target.name], this.state.groupForm[input.target.name].validate(input.target.value))
        let newState = this.state.groupForm
        newState[input.target.name] = fr
        this.setState({ groupForm: newState })
    }

    handleSubmit(event) {
        event.preventDefault()
        let fr = this.state.groupForm
        this.state.inputList.map((item, i) => {
            let auxInput = {}
            auxInput = this.state.groupForm[item].validate(event.target[item].value)
            auxInput.value = event.target[item].value
            auxInput.validate = fr[item].validate
            fr[item] = auxInput
            //fr = Object.assign( this.state.groupForm[item] , fr[item] );
            // this.setState({
            //   groupForm : newStateForm
            // })
        })
        this.setState({ groupForm: fr })
        // let fr = this.state.groupForm
        // Object.keys(fr).map((key) => {
        // return encodeURIComponent(key) + '=' + encodeURIComponent(fr[key]);
        // console.log(key) 
        // console.log('key and validate',this.state.groupForm[key].validate(event.target['name'].value))
        // })
        // console.log(this.input)

        if (!errorFormElements(fr)) { // if no errors in some input --> submit the form
            console.log('not error-->submiiiit', fr)
            this.props.onSubmitModal({
                'name': fr.name.value,
                'location': fr.location.value,
                'locationCode': fr.locationCode.value,
                'description': fr.description.value,
            })
            this.setState(this.initialState)
        }
    }

    componentWillMount() {
        this.initialState = this.state
    }

    render() {

        let form = this.state.groupForm
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
                                        <Input onChange={this.validate} getRef={node => this.inputName = node} type="text" id="name" defaultValue={form.name.value} name="name" />
                                        {form.name.error ? (<FormFeedback>{form.name.errorMessage}</FormFeedback>) : (<div></div>)}
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <FormGroup color={form.locationCode.status} >
                                        <Label for="locationCode">Código Postal</Label>
                                        <Input onChange={this.validate} getRef={node => this.inputLocationCode = node} type="text" name="locationCode" id="locationCode" defaultValue={form.locationCode.value} />
                                        {form.locationCode.error ? (<FormFeedback>{form.locationCode.errorMessage}</FormFeedback>) : (<div></div>)}
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <FormGroup color={form.location.status} >
                                        <Label for="name">Location</Label>
                                        <Input onChange={this.validate} getRef={node => this.inputLocation = node} type="text" name="location" id="location" defaultValue={form.location.value} />
                                        {form.location.error ? (<FormFeedback>{form.location.errorMessage}</FormFeedback>) : (<div></div>)}
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <FormGroup color={form.description.status} >
                                        <Label for="name">Descripción</Label>
                                        <Input onChange={this.validate} getRef={node => this.inputTextarea = node} type="textarea" name="description" id="description" defaultValue={form.description.value} />
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
