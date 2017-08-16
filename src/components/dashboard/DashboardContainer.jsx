import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import Dashboard from './Dashboard'
import * as userActions from '../../actions/userActions'

class Dashboardcontainer extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    render(){
        return(<div className="container"> <Dashboard /> </div>)
    }
}

function mapStateToProps( state ){
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboardcontainer)

