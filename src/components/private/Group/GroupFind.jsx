import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table'

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class GroupFind extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        console.log('render group find', this.props.items)
        return (
            <div>
                <Modal size={"500"} isOpen={this.props.modal} toggle={this.props.onToggle} >
                    <ModalHeader toggle={this.props.onToggle}> Find Groups </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <BootstrapTable data={this.props.items}>
                                    <TableHeaderColumn isKey dataField='name' filter={{ type: 'TextFilter' }}>Group Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='Location'>Location</TableHeaderColumn>
                                    <TableHeaderColumn dataField='actions'>Actions</TableHeaderColumn>
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