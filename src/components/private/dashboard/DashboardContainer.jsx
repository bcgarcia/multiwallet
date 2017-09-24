import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../../../actions/userActions'

class DashboardContainer extends Component{

    constructor(props){
        super(props)



    }

    render(){


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