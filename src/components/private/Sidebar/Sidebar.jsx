import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { browserHistory } from 'react-router'

//import 

//import * as userActions from '../../../actions/userActions'

import './Sidebar.css'

class Sidebar extends Component {

  constructor(props) {
    super(props)
  }

  //TODO: crear menu lateral derecho con tienes dudas. Reportar errores. proximos eventos, eventos pasados,eventos jugando..
  //

  render() {
    return (
      <div className={classNames({ wrapper: true, active: !this.props.sidebar.sidebarOpen })}>
        <div className="side-bar">
          <ul>
            <div className="menu">
              <li>
                <a href="/dashboard">Dashboard <span className="fa fa-dashboard pull-right"></span></a>
              </li>
              <li>
                <a href="/groups" className="active">Groups<span className="fa fa-star pull-right"></span></a>
              </li>
              <li>
                <a href="/events">Events <span className="fa fa-bookmark pull-right"></span></a>
              </li>
              <li>
                <a href="/places">Inst. Deportivas <span className="fa fa-bookmark pull-right"></span></a>
              </li>
              <li>
                <a href="/settings">Settings <span className="fa fa-cog pull-right"></span></a>
              </li>
            </div>
          </ul>
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


export default connect(mapStateToProps, null)(Sidebar)