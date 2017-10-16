import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import GroupAdd from './GroupAdd'
import GroupList from './GroupList'
//import * as userActions from '../../../actions/userActions'

class Group extends Component {

    constructor(props) {
    super(props)
  }
  //TODO: crear menu lateral derecho con tienes dudas. Reportar errores. proximos eventos, eventos pasados,eventos jugando..
  render() {
    return (
      <div className="">
        <div className="">
          <div className={classNames({ wrapper: true, active: this.props.sidebar.sidebarOpen })}>
            <Sidebar itemActive={this.props.itemActive} />
            <div className="content">
                <div className="row justify-content-between">
                 <div className="col-md-3"><h3 className="text-muted">Group</h3></div>
                <div className="col-md-2">
                {console.log(this.props)}
                {
                    !this.props.renderNewGroup 
                    ? (<Button onClick={this.props.onNewGroup} outline color="info">New</Button>)
                    : (<Button onClick={ () => {browserHistory.goBack} } outline color="info">Go back</Button>)
                }
                </div>
                </div>
                <div className="row">
                {
                    !this.props.renderNewGroup 
                    ? (<GroupAdd />)
                    : (<GroupList items={this.props.userGroupList} />)
                }
                </div>
            </div>
          </div>
        </div> 
      </div> 
    );
  }
}

function mapStateToProps( state  ) {
      
    return {
      sidebar: state.sidebar,
      userGroupList: state.userGroup.list
    }
}


export default connect(mapStateToProps, null)(Group)