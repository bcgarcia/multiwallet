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
        this.handleNewGroup = this.handleNewGroup.bind(this)
    }

    async componentDidMount(){
        const { routes } = this.props; // array of routes
        const { router } = this.props;

        //check if user is logged
        console.log(this.props.logged)
        if (!this.props.logged ) browserHistory.push('/login')

        if(this.props.user == null ){
            //get user
            const response = await this.props.userActions.getUserByToken()
            //get all roles available for this route

            const user = await response
            console.log('authorized')
            console.log(user)
            console.log('----------')
        }
    }

    handleNewGroup(){
        browserHistory.push('groups/new')
    }

    render(){
        return(<div> 
            <HeaderContainer />
            <Group 
            renderNewGroup={this.props.newGroup}
            renderListGroups={this.props.listGroup}
            onNewGroup={this.handleNewGroup}
            itemActive={'groups'}/>
        </div>)
    }
}

function mapStateToProps(state, ownProps){
    
    console.log(ownProps.params.hasOwnProperty('option'))
    
    return{
        newGroup  : ownProps.params.hasOwnProperty('option') ? true : false , 
        listGroup : !ownProps.params.hasOwnProperty('option') ? true : false
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions:    bindActionCreators(userActions, dispatch),
        appActions:     bindActionCreators(appActions, dispatch)
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(GroupContainer)