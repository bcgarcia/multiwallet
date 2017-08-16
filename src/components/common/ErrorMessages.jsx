import React,{Component}  from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ErrorMessages extends Component{
    
    constructor(props){
        super(props)
    }

    render(){

        return (this.props.app.errorMessage ?
            <div className="row">
                <div className="col-md-8 offset-1">
                    <div className="alert alert-danger">
                        <p className="error">{this.props.app.errorMessage}</p>
                    </div>
                </div>
            </div>
        : <div></div>)
    }
}

ErrorMessages.PropTypes ={
    errorMessage : PropTypes.string
}


function mapStateToProps(state){
    return{
        app : state.app
    }
}

export default connect(mapStateToProps)(ErrorMessages)