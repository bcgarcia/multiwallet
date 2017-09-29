import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Sidebar from '../Sidebar/Sidebar'

class Dashboard extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const Breadcrumbs = [];
        
        Breadcrumbs.push = {href: 'dashboard1', name: 'Dashboaaaard'}

        return(<div>
                <Sidebar  /> 
                </div>)
    }
}

function mapStateToProps(state){
    
    return{
        app : state.app

    }
}

export default connect(mapStateToProps , null )(Dashboard)