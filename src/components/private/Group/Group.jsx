import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import _ from 'lodash'
import { ButtonGroup, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import GroupAdd from './GroupAdd'
import GroupList from './GroupList'
import GroupFind from './GroupFind'
import * as userActions from '../../../actions/userActions'
import * as groupActions from '../../../actions/groupActions'

class Group extends Component {

  constructor(props) {
    super(props)
  }

  // async componentWillMount() {
    
  //   if( _.isEmpty(userGroupList) ){
  //     userGroupList : await this.userActions.getUserGroups()
  //   }
  
  
  // }

  render() {
   
    console.log('modal find', this.props.modalFind)
    console.log('modal function ', this.props.onOpenModalFind)

    return (
      <div className="">
        <div className="">
          <div className={classNames({ wrapper: true, active: this.props.sidebar.sidebarOpen })}>
            <Sidebar itemActive={this.props.itemActive} />
            <div className="content">
              <div className="row justify-content-between">
                <div className="col-md-3"><h3 className="text-muted">Group</h3></div>
                <div className="col-md-2">
                  <ButtonGroup size="">
                    <Button onClick={this.props.onOpenModal} outline color="info"> <i className="fa fa-plus"></i> New </Button>
                    <Button onClick={this.props.onOpenModalFind} outline color="info" ><i className="fa fa-plus"></i> Find </Button>
                    {/* <Button outline color="info" > <i className="fa fa-info"></i> Help </Button> */}
                  </ButtonGroup>
                </div>
              </div>
              <div className="row hh"> <GroupList items={this.props.userGroupList} onOpenModal={this.props.onOpenModal} /> </div>
            </div>
          </div>
        </div>
        <GroupAdd 
        modal={this.props.modal} 
        onToggle={this.props.onOpenModal}
        onSubmitModal={this.props.onSubmitModal} 
        sendingData={this.props.sendingData} />

        <GroupFind
        modal={this.props.modalFind}
        onToggle={this.props.onOpenModalFind}
        items = {this.props.groupsList} />
      </div>
    )
  }
}

Group.defaultProps = {
  userGroupList: []
}

function mapStateToProps(state) {

  return {
    sidebar: state.sidebar,
    userGroupList: state.user.groups.list
  }
}


function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    groupActions: bindActionCreators(groupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)