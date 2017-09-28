import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

class Dashboard extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const Breadcrumbs = [];
        
        Breadcrumbs.push = {href: 'dashboard1', name: 'Dashboaaaard'}

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                <Breadcrumb breadcrumbItems={Breadcrumbs} />
                    </div>
                </div>
            </div>
    )
    }
}

function mapStateToProps(state){
    
    return{
        app : state.app

    }
}

export default connect(mapStateToProps , null )(Dashboard)