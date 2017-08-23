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
        const NavButtons = !this.props.loggedIn ? 
        (<div className="col-md-9 text-right">
            <Link className="navbar-text" to="/register"> <button className="btn btn-outline-primary marginleft10" type="button">Register</button> </Link>  
            <Link className="navbar-text" to="/login"> <button className="btn btn-outline-primary marginleft10" type="button">Login</button></Link> 
        </div>):(<div className="col-md-9 text-right">
                <Link className="navbar-text" to="/dashboard"> <button className="btn btn-outline-primary marginleft10" type="button">Dashboard</button> </Link> 
                <button onClick={this.handleLogout} className="btn btn-outline-danger btn-login marginleft10" type="button"><span className="fa fa-sign-out"></span></button>
                </div>)

        return( <div>
            <NotificationContainer />
            <nav className="navbar navbar-light bg-faded navbar-toggleable-md margin-bottom20">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerD" aria-controls="navbarTogglerD" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerD">
                    <div className="row">
                        <div className="col-md-3">
                            <Link className="navbar-brand" to="/"><img height="30" src="../img/multiwallet.png" /></Link>
                        </div>
                        {NavButtons}
                    </div>
                </div>
                
            </nav>
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