import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import Header from '../Header/Header'

import * as userActions from '../../../actions/userActions'

class DashboardContainer extends Component{

    constructor(props){
        super(props)



    }

    render(){

        return(<div> 
            <Header />
            <Dashboard /> 
            </div>)

    }
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return{

        userActions : bindActionCreators(userActions , dispatch)

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(DashboardContainer)