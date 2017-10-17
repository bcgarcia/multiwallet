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

        this.state = {
            birthDate : '',
            modal: false
        };

        this.toggleUserModal                = this.toggleUserModal.bind(this)
        this.handleLauchModalError          = this.handleLauchModalError.bind(this)
        this.handleLauchModalError          = this.handleLauchModalError.bind(this)
        this.handleLauchModalSuggest        = this.handleLauchModalSuggest.bind(this)
        this.handleLogout                   = this.handleLogout.bind(this)
        this.handleChangeBirthDate          = this.handleChangeBirthDate.bind(this)
        this.handleChangeUsername           = this.handleChangeUsername.bind(this)

        this.handleChangePassword           = this.handleChangePassword.bind(this)
        this.handleSubmitUserModal          = this.handleSubmitUserModal.bind(this)
        this.handleToggleHeader             = this.handleToggleHeader.bind(this)
        this.handleToggleUserNotifications  = this.handleToggleUserNotifications.bind(this)
        this.handleToggleUserOptions        = this.handleToggleUserOptions.bind(this)
        this.handleToggleSidebar            = this.handleToggleSidebar.bind(this)
    }

    handleSubmitUserModal(){

        this.props.userActions.update()
    }

    toggleUserModal() {
        console.log('handleToggle')
        this.setState({
            modal: !this.state.modal
        });
    }

    handleToggleHeader() { this.props.appActions.toggleHeader(!this.props.app.headerOpen) }
    
    handleToggleUserNotifications() { this.props.appActions.toggleUserNotifications(!this.props.app.userNotificationsOpen) }

    handleToggleUserOptions() { this.props.appActions.toggleUserOptions(!this.props.app.userOptionsOpen) }

    handleToggleSidebar(event) {
        event.preventDefault()
        this.props.appActions.toggleSidebar(!this.props.sidebar.sidebarOpen)
    }

    handleChangeBirthDate(date){

        this.setState({
            birthDate: date
        });
    }

    handleChangeUsername(event){
        event.preventDefault
        let inputValue = event.target.value
        let inputState = null
        let error = false
        let errorMsg = null
        let form ={
            email:{
                value : inputValue,
                state : inputState,
                error: error,
                errorMessage : errorMsg
            }
        }
        if(validator.validEmail(inputValue) && !validator.isEmpty(inputValue) ){
            this.props.userActions.checkAvailableEmail(form.email)
        }
        else{
            form.email.inputState = 'danger'
            form.email.error = true
            form.email.errorMsg = "No es un formato válido de email o está vacío"
        }
        let updatedState = this.mergeWithCurrentState(form)
        //this.emitStateChange(updatedState)
    }

    handleChangePassword(event){

    }
    handleLauchModalError(){
        
    }

    handleLauchModalSuggest(){

    }

    handleLogout(){

        this.props.userActions.logout()
    }

    render() {
        return (
            <div>
               <Header
                onLauchModal={this.toggleUserModal}
                toggle={this.handleToogleHeader} 
                toggleUserNotifications={this.handleToggleUserNotifications} 
                toggleUserOptions={this.handleToggleUserOptions}
                toggleSidebar={this.handleToggleSidebar} /> 
                <UserData 
                user={this.props.user}
                sendingData={this.props.app.currentlySending}
                formState={this.props.userform}
                onSubmitModal={this.handleSubmitUserModal} 
                onChangePassword={this.handleChangePassword} 
                onModal={this.toggleUserModal} 
                onChangeBirthdate={this.handleChangeBirthDate}
                modal={this.state.modal} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sidebar: state.sidebar,
        app: state.app,
        user : state.user,
        userform : state.formRegister
    }
}


function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(HeaderContainer)