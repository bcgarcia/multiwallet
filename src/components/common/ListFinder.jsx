import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Alert, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Media} from 'reactstrap'

class ListFinder extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        let list = this.props.list
        if( list.length == 0 ){
            return( <Alert color="info">No hay grupos cerca...</Alert> )
        }
        else{
            return(
                list.map( item => (
                        <Media>
                        <Media left href="#">
                          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                          <Media heading>
                            Media heading
                          </Media>
                          
                        </Media>
                      </Media>
                ))
            )
        }
    }
}

ListFinder.PropTypes = {


}

export default ListFinder