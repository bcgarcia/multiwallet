import React from 'react'
import {Button} from 'reactstrap'
const LoadingButton = ({buttonStyle}) => {
    console.log(buttonStyle)
    return(
    <Button color={buttonStyle} block disabled > Loading <i className="fa fa-spinner fa-spin" > </i> </Button>
    )
}
export default LoadingButton