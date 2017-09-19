import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NotificationContainer from './NotificationContainer'
import LoadingButton from './LoadingButton'
import * as userActions from '../../actions/userActions'


class Header extends Component{

    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        this.props.userActions.logout();
    }
    
    render(){
        

        return( <div>
            <NotificationContainer />
            
        </div> )
    }
}

Header.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  currentlySending: React.PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return {
        data : state
    }
}

function mapDispatchToProps(dispatch){
    return{
        userActions : bindActionCreators(userActions , dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(Header)