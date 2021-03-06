import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import HeaderContainer from '../Header/HeaderContainer'
import Group from './Group'
import {browserHistory} from 'react-router'
import * as groupActions from '../../../actions/groupActions'
import * as appActions from '../../../actions/appActions'

class GroupItemContainer extends Component{

    constructor(props){
        super(props)
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

export default connect( mapStateToProps , mapDispatchToProps )(GroupItemContainer)