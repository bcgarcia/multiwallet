import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import {browserHistory} from 'react-router'
import Dashboard from './Dashboard'
import * as userActions from '../../actions/userActions'

class Dashboardcontainer extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    render(){
        return(<div className="container">  
            <div className="row">
                <div className="col-md-4">
                    {console.log(this.props)}
                    <p className="text">Email : {this.props.user.email} </p>
                    <p className="text">Token : {this.props.user.token} </p>
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
        user : state.user,
        app : state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboardcontainer)

