import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { ButtonGroup ,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
//import Breadcrumb from '../Breadcrumb/Breadcrumb'
import GroupAdd from './GroupAdd'
import GroupList from './GroupList'
import * as userActions from '../../../actions/userActions'
import * as groupActions from '../../../actions/groupActions'

class Group extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    let renderize = null
    if(this.props.renderNewGroup ){renderize = <GroupAdd />}
    else if( this.props.renderMyListGroups ){renderize = <GroupList items={this.props.userGroupList} />}
    else if( this.props.renderFindGroups ){ /*renderize = <GroupFind /> */}

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
                  {!this.props.renderNewGroup 
                      ? (<Button onClick={() =>{ browserHistory.push('groups/new')} } outline color="info"> <i className="fa fa-plus"></i> New </Button>)
                      : (<Button onClick={ () => {browserHistory.goBack() } } outline color="info"> <i className="fa fa-reply"></i>  back</Button>)
                  }
                  <Button outline color="info" ><i className="fa fa-plus"></i> Find </Button>
                  {/*<Button outline color="info" > <i className="fa fa-info"></i> Help </Button>*/}
                </ButtonGroup>
                </div>
                </div>
                <div className="row">
                { renderize }
                </div>
            </div>
          </div>
        </div> 
      </div> 
    );
  }
}

Group.defaultProps = {
  userGroupList : []
}

function mapStateToProps( state ) {

    return {
      sidebar: state.sidebar,
      userGroupList: state.user.groups.list
    }
}


function mapDispatchToProps(dispatch){
  return {
      userActions: bindActionCreators(userActions, dispatch),
      groupActions: bindActionCreators(groupActions, dispatch)
  }
}

export default connect( mapStateToProps , mapDispatchToProps )( Group )