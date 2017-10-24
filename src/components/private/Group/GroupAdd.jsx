import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, InputGroup, FormFeedback, Button, InputGroupAddon,FormText  } from 'reactstrap'
import LoadingButton from '../../common/LoadingButton'
import GroupCard from './GroupCard'
import './Group.css'

class GroupList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (<div className="col-md-12">
      <Form >
        
        {/*
      this.props.sendingData
      ? (<LoadingButton buttonStyle={'primary'} block={true} />)
      : (<Button type="submit" color="primary" block > Create </Button>)
      */}
      </Form>

    </div>)
  }
}


//export default connect()(GroupList)
export default GroupList
