import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SideBarMenu from '../SideBarMenu/SideBarMenu'

class Dashboard extends Component{

    constructor(props){

        super(props)
    }

    render(){
        return(<div> <SideBarMenu /> </div>)
    }
}

function mapStateToProps(state){
    
    return{


    }
}

export default connect(mapStateToProps , null )(Dashboard)