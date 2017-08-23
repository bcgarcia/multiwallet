import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import {browserHistory} from 'react-router'
import Dashboard from './Dashboard'
import NavbarContainer from './navbar/NavbarContainer'
import * as userActions from '../../actions/userActions'

class DashboardContainer extends Component{

    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        
    }

    render(){
        return(<div className="container-fluid">  
            <div className="row">
                <div className="col-md-2">
                    <NavbarContainer />
                </div>
                <div className="col-md-8">
                    <Dashboard  />    
                </div>
            </div>
        </div>)
    }
}

function mapStateToProps( state ){
    return {
        email       : state.user.email,
        displayName : state.user.displayName,
        emailVerfied: state.user.emailVerfied
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

