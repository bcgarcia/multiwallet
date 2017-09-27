import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { browserHistory } from 'react-router'
//import * as userActions from '../../../actions/userActions'

import './Sidebar.css'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    console.log('sidebar menu')
    console.log(this.props)
  }

  render() {
    return (
      <div className="wrapper">
       
       <div className="side-bar">
       <ul>
           <li className="menu-head">
              brand <a href="#" className="push_menu"><span className="fa fa-bars pull-right"></span></a>
           </li>
           <div className="menu">
               <li>
                   <a href="#">Dashboard <span className="fa fa-dashboard pull-right"></span></a>
               </li>
               <li>
                   <a href="#" className="active">Love snippet<span className="fa fa-heart pull-right"></span></a>
               </li>
               <li>
                   <a href="#">Like it? <span className="fa fa-star pull-right"></span></a>
               </li>
               <li>
                   <a href="#">Settings <span className="fa fa-cog pull-right"></span></a>
               </li>
           </div>
           
       </ul>
 </div>   


          {/*<p>List Based</p>
      <Nav vertical >
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />*/}

       
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