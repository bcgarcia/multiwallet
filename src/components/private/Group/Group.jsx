import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { Label,Form,FormGroup,Modal,Input,ModalBody,ModalHeader,ModalFooter,ButtonGroup, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import GroupList from './GroupList'
import * as userActions from '../../../actions/userActions'
import * as groupActions from '../../../actions/groupActions'

class Group extends Component {

  constructor(props) {
    super(props)

    console.log('groooouuuuuup', this.props)
  }

  render() {
    let renderize = null
    if (this.props.renderNewGroup) { renderize = <GroupAdd /> }
   
    else if (this.props.renderFindGroups) { /*renderize = <GroupFind /> */ }

    return (
      <div className="">
        <div className="">
          <div className={classNames({ wrapper: true, active: this.props.sidebar.sidebarOpen })}>
            <Sidebar itemActive={this.props.itemActive} />
            <div className="content">
              <div className="row justify-content-between">
                <div className="col-md-3"><h3 className="text-muted">Group</h3></div>
                <div className="col-md-2">
                  <ButtonGroup size="">
                    <Button onClick={this.props.onOpenModal} outline color="info"> <i className="fa fa-plus"></i> New </Button>
                    <Button outline color="info" ><i className="fa fa-plus"></i> Find </Button>
                    {/*<Button outline color="info" > <i className="fa fa-info"></i> Help </Button>*/}
                  </ButtonGroup>
                </div>
              </div>
              <div className="row hh"> <GroupList items={this.props.userGroupList} /> </div>
            </div>
          </div>
        </div>

        <Modal size={"500"} isOpen={this.props.modal} toggle={this.props.onOpenModal} >
          <Form onSubmit={this.onSubmitModal}>
            <ModalHeader toggle={this.props.onOpenModal}> Create new group </ModalHeader>
            <ModalBody>
              <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <FormGroup>
                    <Label for="name">Nombre</Label>
                    <Input type="text" id="name" defaultValue={''} name="name" />
                    {/*this.props.formState.name.error ? (<FormFeedback>{this.props.formState.name.errorMessage}</FormFeedback>) : (<div></div>)*/}
                  </FormGroup>
                </div>
              </div>
              </div>
            </ModalBody>
            <ModalFooter>
              {this.props.sendingData
                  ? (<LoadingButton buttonStyle={'primary'} block={false} />)
                  : (<Button type="submit" color="primary" > submit action </Button>)}
              <Button color="secondary" onClick={this.props.onOpenModal}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

Group.defaultProps = {
  userGroupList: []
}

function mapStateToProps(state) {

  return {
    sidebar: state.sidebar,
    userGroupList: state.user.groups.list
  }
}


function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    groupActions: bindActionCreators(groupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)