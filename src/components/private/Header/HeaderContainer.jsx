import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {browserHistory} from 'react-router'
import Header from './Header'
import UserData from '../User/UserData'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {modal: false}
        this.handleToggleUserDataModal      = this.handleToggleUserDataModal.bind(this)
        this.handleToggleHeader             = this.handleToggleHeader.bind(this)
        this.handleToggleUserNotifications  = this.handleToggleUserNotifications.bind(this)
        this.handleToggleUserOptions        = this.handleToggleUserOptions.bind(this)
        this.handleToggleSidebar            = this.handleToggleSidebar.bind(this)
    }

    handleToggleUserDataModal(){
        this.setState({modal : !this.state.modal})
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
            <div>
               <Header
                onLauchModal={this.handleToggleUserDataModal}
                toggle={this.handleToogleHeader} 
                toggleUserNotifications={this.handleToggleUserNotifications} 
                toggleUserOptions={this.handleToggleUserOptions}
                toggleSidebar={this.handleToggleSidebar} /> 
                <UserData user={ this.props.user} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sidebar: state.sidebar,
        app: state.app,
        user : state.user
    }
}


function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(HeaderContainer)