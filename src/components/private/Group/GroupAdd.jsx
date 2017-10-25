import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, InputGroup, FormFeedback, Button, InputGroupAddon,FormText,Modal,ModalHeader,ModalBody,ModalFooter  } from 'reactstrap'
import LoadingButton from '../../common/LoadingButton'
import GroupCard from './GroupCard'
import './Group.css'

const GroupAdd = ({modal,onToggle,onSubmitModal,sendingData,form})=>(
  <Modal size={"500"} isOpen={modal} toggle={onToggle} >
  <Form onSubmit={onSubmitModal}>
    <ModalHeader toggle={onToggle}> Create Group </ModalHeader>
    <ModalBody>
      <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <FormGroup>
            <Label for="name">Nombre</Label>
            <Input getRef="name" type="text" id="name" defaultValue={form.name.value} name="name" />
            {form.name.error ? (<FormFeedback>{form.name.errorMessage}</FormFeedback>) : (<div></div>)}
          </FormGroup>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <FormGroup>
            <Label for="locationCode">Código Postal</Label>
            <Input getRef="locationCode" type="text" name="locationCode" id="locationCode" defaultValue={form.locationCode.value} />
            {form.locationCode.error ? (<FormFeedback>{form.locationCode.errorMessage}</FormFeedback>) : (<div></div>)}
          </FormGroup>
        </div>
      </div>
      <div className="col-md-8">
        <div className="form-group">
          <FormGroup>
            <Label for="name">Location</Label>
            <Input type="text" name="location" id="locationCode" defaultValue={form.location.value} />
            {/*this.props.formState.name.error ? (<FormFeedback>{this.props.formState.name.errorMessage}</FormFeedback>) : (<div></div>)*/}
          </FormGroup>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <FormGroup>
            <Label for="name">Descripción</Label>
            <Input type="textarea" name="description" id="description" defaultValue={form.description.value} />
            {/*this.props.formState.name.error ? (<FormFeedback>{this.props.formState.name.errorMessage}</FormFeedback>) : (<div></div>)*/}
          </FormGroup>
        </div>
      </div>
      </div>
    </ModalBody>
    <ModalFooter>
      {sendingData
          ? (<LoadingButton buttonStyle={'primary'} block={false} />)
          : (<Button type="submit" color="primary" > Send </Button>)}
      <Button color="secondary" onClick={onToggle}>Cancel</Button>
    </ModalFooter>
  </Form>
</Modal>
)

export default GroupAdd
