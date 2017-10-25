import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { ButtonGroup, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import GroupAdd from './GroupAdd'
import GroupList from './GroupList'
import * as userActions from '../../../actions/userActions'
import * as groupActions from '../../../actions/groupActions'

class Group extends Component {

  constructor(props) {
    super(props)
  }

  render() {
   
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
                    <Button outline color="info" ><i className="fa fa-plus"></i> Find </Button>
                    {/*<Button outline color="info" > <i className="fa fa-info"></i> Help </Button>*/}
                  </ButtonGroup>
                </div>
              </div>
              <div className="row hh"> <GroupList items={this.props.userGroupList} /> </div>
            </div>
          </div>
        </div>
        <GroupAdd 
        modal={this.props.modal} 
        onToggle={this.props.onOpenModal}
        onSubmitModal={this.props.onSubmitModal} 
        sendingData={this.props.sendingData}
        form={this.props.form} />
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