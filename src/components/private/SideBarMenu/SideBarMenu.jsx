import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import classNames from 'classnames'
//import * as userActions from '../../../actions/userActions'

class SideBarMenu extends Component{

    constructor(props){
        super(props)
        console.log('sidebar menu')
        console.log(this.props)
    }

    render(){
        return (
            <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
              <div className="sidebar-nav navbar-collapse collapse">
                <ul className="nav in" id="side-menu">
                  <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </li>
      
                  <li>
                      <Link href="" to="/dashboard" >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
                      </Link>
                  </li>
      
                  <li className={classNames({ active: !this.props.sidebar.userOptionsCollapsed })}>
                    <Link
                      href=""
                      to="/options"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ chartsElementsCollapsed: !this.props.sidebar.userOptionsCollapsed });
                        return false;
                      }}
                    >
                      <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Options
                      <span className="fa arrow" />
                    </Link>
                    <ul
                      className={
                        classNames({
                          'nav nav-second-level': true,
                          collapse: this.props.sidebar.userOptionsCollapsed,
                        })
                    }
                    >
                      <li>
                        <a href="" onClick={(e) => { e.preventDefault(); history.push('/flotcharts'); }} >
                          FlotCharts
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={(e) => { e.preventDefault(); history.push('/morrisjscharts'); }}
                        >
                          Morrisjs Charts
                        </a>
                      </li>
                    </ul>
                  </li>
      
      
                  <li>
                    <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                      <i className="fa fa-table fa-fw" /> &nbsp;Tables
                    </a>
                  </li>
      
                  <li>
                    <a href="" onClick={(e) => { e.preventDefault(); history.push('/forms'); }} >
                      <i className="fa fa-table fa-fw" /> &nbsp;Forms
                    </a>
                  </li>
      
                 
                  
      
                  <li>
                    <a href="http://www.strapui.com/">Premium React Themes</a>
                  </li>
                </ul>
              </div>
            </div>
          );

    }
}

function mapStateToProps(state){
    return{
        sidebar : state.sidebar
    }
}


export default connect(mapStateToProps , null)(SideBarMenu)