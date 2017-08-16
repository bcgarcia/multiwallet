import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import CredentialsForm from '../forms/CredentialsForm'
import * as userActions from '../../actions/userActions'

class Register extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container-fluid">
                <CredentialsForm btnText="Register" />
            </div>
        )
    }   
}


function mapStateToProps(state){

    return {
        
    }
}


function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch)
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(Register)





