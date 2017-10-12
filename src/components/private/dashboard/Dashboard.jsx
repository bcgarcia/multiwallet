import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
//import * as userActions from '../../../actions/userActions'

class Dashboard extends Component {

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
                <div className="row">
                 <div className="col-md-12"><h1>DASHBOARD</h1><small></small></div>
                </div>
            </div>
          </div>
        </div> 
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebar: state.sidebar
  }
}


export default connect(mapStateToProps, null)(Dashboard)