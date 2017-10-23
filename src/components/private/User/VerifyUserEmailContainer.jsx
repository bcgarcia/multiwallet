import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class VerifyUserEmailContainer extends Component{

    constructor(props){
        
        super(props)


    }
    render(){

        
    }
}

function mapStateToProps(state){
    return {
        app     : state.app,
        user    : state.user
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch),
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(VerifyUserEmailContainer)