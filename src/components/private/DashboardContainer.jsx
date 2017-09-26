import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Dashboard from './dashboard/Dashboard'
import Header from './Header/Header'

import * as userActions from '../../actions/userActions'
import * as appActions from '../../actions/appActions'

import '../../css/adminer.css'
import '../../css/app.css'

class DashboardContainer extends Component{

    constructor(props){
        super(props)
        this.toogleHeader = this.toogleHeader.bind(this)
        this.toggleUserNotifications = this.toggleUserNotifications.bind(this)
        this.toggleUserOptions = this.toggleUserOptions.bind(this)
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



    render(){

        return(<div> 
            <Header 
            toggle={this.toogleHeader} 
            toggleUserNotifications={this.toggleUserNotifications} 
            toggleUserOptions = {this.toggleUserOptions} />
            <Dashboard /> 
            </div>)

    }
}

function mapStateToProps(state){
    return{
        app : state.app
    }
}

function mapDispatchToProps(dispatch){
    return{

        userActions : bindActionCreators(userActions , dispatch),
        appActions  : bindActionCreators(appActions , dispatch )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(DashboardContainer)