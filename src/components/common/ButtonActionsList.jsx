import React from 'react'
import {Button} from 'reactstrap'
const ButtonActionList = ({buttonList}) => {
    if(buttonList.length > 0 ){
        buttonList.map( button =>{
            let label = button.loading ? 'Loading <i className="fa fa-spinner fa-spin" > </i>' : button.value
            return( <Button onClick={button.fnClick} color={button.color} block={button.block} disabled={button.disabled} >  {label}  </Button> )
        })
    }
    else return ""
}
export default ButtonActionList