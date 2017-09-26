import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {browserHistory} from 'react-router'
import Sidebar from '../SideBarMenu/SideBarMenu'

import './Header.css'



const logo = require('./logo.png');

class Header extends Component {

    constructor(props) {
        super(props)
        console.log('sidebar menu')
        console.log(this.props.app)
    }
    render() {

        return (
            <div id="wrapper" className="">
                <Navbar color="primary" light toggleable>
                    <NavbarToggler right onClick={this.props.toggle} />
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Collapse isOpen={this.props.app.headerOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavDropdown isOpen={this.props.app.userNotificationsOpen} toggle={this.props.toggleUserNotifications} >
                                <DropdownToggle nav caret>
                                    <span className="fa fa-bell"></span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem style={ {width: 300} } eventKey="1">
                                    <div> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </NavDropdown>
                            {/*<NavItem>
                                <NavLink>Profile</NavLink>
                            </NavItem> */}
                            <NavDropdown isOpen={this.props.app.userOptionsOpen} toggle={this.props.toggleUserOptions} >
                                <DropdownToggle nav>
                                    <span className="fa fa-user"> </span>
                                    <span> Profile</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={ () => { browserHistory.push('/my-profile') } }>  <span className="fa fa-user"> </span> My profile </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={ () => {browserHistory.push('/settings') } } > <span className="fa fa-cog"></span> Settings </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={ () => {browserHistory.push('/logout')} } > <span className="fa fa-sign-out"></span> Logout </DropdownItem>
                                </DropdownMenu>
                            </NavDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        sidebar: state.sidebar,
        app: state.app
    }
}


export default connect(mapStateToProps, null)(Header)