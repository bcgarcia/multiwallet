import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table'
import ButtonActionsList from '../../common/ButtonActionsList'

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

        //console.log('click on join button', id )

    }

    render() {

        return (
            <div>
                <Modal className='modalMaxWidth800' size="800px" isOpen={this.props.modal} toggle={this.props.onToggle} >
                    <ModalHeader toggle={this.props.onToggle}> Find Groups </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <BootstrapTable data={this.props.groups.list}>
                                    <TableHeaderColumn isKey dataField='name' filter={{ type: 'TextFilter' }}>Group Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='location' filter={{ type: 'TextFilter' }} >Location</TableHeaderColumn>
                                    <TableHeaderColumn dataField='actions'> <ButtonActionsList buttons={this.state.buttonsActions} /> </TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.onToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>)
    }
}

export default GroupFind