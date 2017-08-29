import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import {browserHistory} from 'react-router'
import Dashboard from './Dashboard'
import NavHeaderContainer from './navHeader/NavHeaderContainer'
import * as userActions from '../../actions/userActions'

class DashboardContainer extends Component{

    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        
    }


    render(){

        let navThree = [
            {
                'icon': 'fa fa-users',
                'name': 'Grupos',
                'tooltip': 'Gestiona tus grupos',
                'url': 'groups'
            },
            {
                'icon': 'fa fa-plus',
                'name': 'Eventos',
                'tooltip': 'Gestiona tus eventos',
                'url': 'events'
            },
            {
                'icon': 'fa fa-thumbs-up',
                'name': 'Recintos',
                'tooltip': 'Gestiona lugares',
                'url': 'places'
            },
         ]


         return(<div className="page-header navbar navbar-fixed-top">
            <div className="page-header-inner ">
               
                <div className="page-logo">
                    <a href="index.html">
                        <img src="" alt="logo" class="logo-default" /> 
                    </a>
                    <div className="menu-toggler sidebar-toggler">
                       
                    </div>

                </div>
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                TODO:
                1 - SEGUIR AQUI CON LA MAQUETACION CREACT COMPONENTES POR CADA ACCION.
                2- CARGAR CSS Y JS



            </div>
         
         </div>)

    }
}

function mapStateToProps( state ){
    return {
        email       : state.user.email,
        displayName : state.user.displayName,
        emailVerfied: state.user.emailVerfied
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions : bindActionCreators( userActions , dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

