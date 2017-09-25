import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import classNames from 'classnames'
import {Navbar, NavDropdown, DropdownMenu, DropdownItem   } from 'reactstrap'
//import * as userActions from '../../../actions/userActions'

class Header extends Component{

    constructor(props){
        super(props)
        console.log('sidebar menu')
        console.log(this.props)

        this.isOpen = false

    }

    toggle() {
        this.setState({
        isOpen: true
        });
    }

    render(){
       
        return (
            <div id="wrapper" className="content">
              <Navbar className="container-fluid"  style={ {margin: 0} }>
                  {/*<Brand>
                    <span>
                      <img src={logo} alt="Start React" title="Start React" />
                      <span>&nbsp;SB Admin React - </span>
                        <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a>
                        <button type="button" className="navbar-toggle" onClick={() => {toggleMenu();}} style={{position: 'absolute', right: 0, top: 0}}>
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                    </span>
                  </Brand> */}
                  <ul className="nav navbar-top-links navbar-right">
        
                      <NavDropdown isOpen={this.isOpen} toggle={this.toggle}  title={<span><i className="fa fa-envelope fa-fw"></i></span>} id="navDropdown1">
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </NavDropdown>
        
                 
        
                    
        
             
        
                  </ul>
                 
            </Navbar>
            </div>
          );

    }
}

function mapStateToProps(state){
    return{
        sidebar : state.sidebar
    }
}


export default connect(mapStateToProps , null)(Header)