import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {browserHistory} from 'react-router'
import Header from './Header'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.handleToggleHeader = this.handleToggleHeader.bind(this)
        this.handleToggleUserNotifications = this.handleToggleUserNotifications.bind(this)
        this.handleToggleUserOptions = this.handleToggleUserOptions.bind(this)
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
    }


    handleToggleHeader() { this.props.appActions.toggleHeader(!this.props.app.headerOpen) }
    
    handleToggleUserNotifications() { this.props.appActions.toggleUserNotifications(!this.props.app.userNotificationsOpen) }

    handleToggleUserOptions() { this.props.appActions.toggleUserOptions(!this.props.app.userOptionsOpen) }

    handleToggleSidebar(event) {
        event.preventDefault()
        this.props.appActions.toggleSidebar(!this.props.sidebar.sidebarOpen)
    }

    render() {
        return (
               <Header
                toggle={this.handleToogleHeader} 
                toggleUserNotifications={this.handleToggleUserNotifications} 
                toggleUserOptions={this.handleToggleUserOptions}
                toggleSidebar={this.handleToggleSidebar} /> 
            
        );
    }
}

function mapStateToProps(state) {
    return {
        sidebar: state.sidebar,
        app: state.app
    }
}


function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(HeaderContainer)