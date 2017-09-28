import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Dashboard from './dashboard/Dashboard'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import * as userActions from '../../actions/userActions'
import * as appActions from '../../actions/appActions'

import '../../css/app.css'
import '../../css/adminer.css'

class DashboardContainer extends Component{

    constructor(props){
        super(props)
        this.toogleHeader = this.toogleHeader.bind(this)
        this.toggleUserNotifications = this.toggleUserNotifications.bind(this)
        this.toggleUserOptions = this.toggleUserOptions.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this)
    }


    toogleHeader(){
        this.props.appActions.toggleHeader(!this.props.app.headerOpen)
    }

    toggleUserNotifications(){
        this.props.appActions.toggleUserNotifications(!this.props.app.userNotificationsOpen)
    }

    toggleUserOptions(){
        this.props.appActions.toggleUserOptions(!this.props.app.userOptionsOpen)
    }

    toggleSidebar(event){
        event.preventDefault()
        this.props.appActions.toggleSidebar(!this.props.sidebar.sidebarOpen)
    }

    //TODO: ordenar bien cols 

    render(){

        return(<div className=""> 
            <Header 
            toggle={this.toogleHeader} 
            toggleUserNotifications={this.toggleUserNotifications} 
            toggleUserOptions={this.toggleUserOptions}
            toggleSidebar={this.toggleSidebar} />
            <Sidebar  /> 
            <Dashboard />
            </div>)

    }
}

function mapStateToProps(state){
    return{
        app : state.app,
        sidebar : state.sidebar
    }
}

function mapDispatchToProps(dispatch){
    return{

        userActions : bindActionCreators(userActions , dispatch),
        appActions  : bindActionCreators(appActions , dispatch )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(DashboardContainer)