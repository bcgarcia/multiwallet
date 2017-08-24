import React ,{Component} from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
class NavbarContainer extends Component{

    constructor(props){
        super(props)
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

        return(<div className="">
            
            <Navbar nav={navThree} />
        </div>)
    }


}


export default NavbarContainer