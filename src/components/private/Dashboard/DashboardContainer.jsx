import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import HeaderContainer from '../Header/HeaderContainer'

import Authorized from '../Authorized/Authorized'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'


class DashboardContainer extends Authorized {

    constructor(props) {
        super(props)
    }

    //TODO: ordenar bien cols 

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
        app: state.app,
        sidebar: state.sidebar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)