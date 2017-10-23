import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import HeaderContainer from '../Header/HeaderContainer'
import Group from './Group'
import {browserHistory} from 'react-router'
import lodash from 'lodash'

import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class GroupContainer extends Component{

    constructor(props){
        super(props)
    }

    async componentDidMount(){
        if (!this.props.logged ) browserHistory.push('/login')
        if ( ! this.props.user.loaded ) await this.props.userActions.getUserByToken()
    }

    async componentWillMount(){
    
        
    
    }



    render(){
        return(<div> 
            <HeaderContainer />
            <Group 
            renderNewGroup={this.props.newGroup}
            renderMyListGroups={this.props.listGroup}
            renderFindGroups={this.props.findGroup}
            itemActive={'groups'}/>
        </div>)
    }
}

function mapStateToProps(state, ownProps){
    
    console.log(ownProps.params.hasOwnProperty('option') )
    console.log('ownprops',ownProps.params )
    
    return{
        user      : state.user,
        logged    : state.app.loggedIn,
        newGroup  : ownProps.params.hasOwnProperty('option') && ownProps.params.option == 'new'  ? true : false , 
        findGroup : ownProps.params.hasOwnProperty('option') && ownProps.params.option == 'find' ? true : false,
        listGroup : !ownProps.params.hasOwnProperty('option')                                    ? true : false
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions:    bindActionCreators(userActions, dispatch),
        appActions:     bindActionCreators(appActions, dispatch)
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(GroupContainer)