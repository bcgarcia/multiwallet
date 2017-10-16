import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import HeaderContainer from '../Header/HeaderContainer'
import lodash from 'lodash'
import {browserHistory} from 'react-router'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class DashboardContainer extends Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount(){
        if (!this.props.logged ) browserHistory.push('/login')
        if ( ! this.props.user.loaded ) await this.props.userActions.getUserByToken()
    }

    render() {
        return (<div className="">
            <HeaderContainer />
            <Dashboard 
            itemActive={'dashboard'}/>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        logged: state.app.loggedIn,
        app: state.app,
        sidebar: state.sidebar,
        user : state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)