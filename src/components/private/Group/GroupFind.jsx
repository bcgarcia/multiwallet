import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table'
import ButtonActionsList from '../../common/ButtonActionsList'
import ListFinder from '../../common/ListFinder'

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import './Group.css'

class GroupFind extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state={

            buttonsActions :[{
                value : 'Join',
                block : false,
                loading: false,
                color: 'primary',
                disabled : false,
                fnClick : this.handleClick
            }]
        }
    }

    handleClick(id){
        console.log('click on join button', id )
    }

    render() {

        console.log('buttonactionslist',this.state.buttonsActions)

        console.log('lista grupos', this.props.groups.list)

        return (
            <div>
                
                <Modal className='' isOpen={this.props.modal} toggle={this.props.onToggle} >
                    <ModalHeader toggle={this.props.onToggle}> Find Groups </ModalHeader>
                    <ModalBody>
                    <ListFinder list={this.props.groups.list} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.onToggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>)
    }
}

export default GroupFind