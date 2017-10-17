import React from 'react'
import {Button} from 'reactstrap'
const LoadingButton = ({buttonStyle, block}) => {

    return(block 
        ? <Button color={buttonStyle} block disabled > Loading <i className="fa fa-spinner fa-spin" > </i> </Button> 
        : <Button color={buttonStyle} disabled > Loading <i className="fa fa-spinner fa-spin" > </i> </Button>)
}

export default LoadingButton