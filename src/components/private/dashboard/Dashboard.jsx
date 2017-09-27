import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'

class Dashboard extends Component{

    constructor(props){

        super(props)
    }

    render(){
        return(<Sidebar />)
    }
}

function mapStateToProps(state){
    
    return{
        app : state.app

    }
}

export default connect(mapStateToProps , null )(Dashboard)