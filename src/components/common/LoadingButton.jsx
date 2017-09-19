import React from 'react'
import {Button} from 'react-bootstrap'
const LoadingButton = ({buttonStyle}) => {
    console.log(buttonStyle)
    return(
    
    <Button bsStyle={buttonStyle} block disabled > Loading <i className="fa fa-spinner fa-spin" > </i> </Button>
    )
}
export default LoadingButton