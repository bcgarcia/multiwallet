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
import * as groupActions from '../../../actions/groupActions'

class GroupContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            modal           : false,
            modalGroupFind  : false
        }
        this.toggleNewGroupModal  = this.toggleNewGroupModal.bind(this)
        this.handleSubmitNewGroup = this.handleSubmitNewGroup.bind(this)
        this.toggleFindGroupsModal = this.toggleFindGroupsModal.bind(this)
    }

    toggleNewGroupModal(){ 
        this.setState( {
            modal: !this.state.modal,
            modalGroupFind: false
        } ) 
    }
    
    async toggleFindGroupsModal(){ 

        await this.props.groupActions.getGroups({})
        this.setState( {
            modalGroupFind: !this.state.modalGroupFind,
            modal: false,
        }) 
    }

    async componentDidMount(){
        if (!this.props.logged ) browserHistory.push('/login')
        if ( ! this.props.user.loaded ) await this.props.userActions.getUserByToken()
    }

    // async componentWillMount(){
    
    // }

    async handleSubmitNewGroup(form){
        await this.props.userActions.newGroup(form)
    }


    render(){
        return(<div> 
            <HeaderContainer />
            <Group 
                itemActive={'groups'}
                modal={this.state.modal}
                modalFind={this.state.modalGroupFind}
                onOpenModalFind={this.toggleFindGroupsModal}
                onOpenModal={this.toggleNewGroupModal}
                sendingData={this.props.app.currentlySending}
                onSubmitModal={this.handleSubmitNewGroup} />
        </div>)
    }
}

function mapStateToProps(state, ownProps){
    return{
        group     : state.group,
        user      : state.user,
        logged    : state.app.loggedIn,
        app       : state.app,
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions:    bindActionCreators(userActions, dispatch),
        appActions:     bindActionCreators(appActions, dispatch),
        groupActions:   bindActionCreators(groupActions , dispatch)
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(GroupContainer)