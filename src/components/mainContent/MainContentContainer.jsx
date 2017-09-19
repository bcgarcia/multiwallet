import React,{Component} from 'react'
import PropTypes from 'prop-types'

class MainContentContainer extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(<div className="container-fluid">
                <div className="row">
                    <div className="col-md-12  text-center">
                        <h1 className="bd-title">public site</h1>
                    </div>
                </div>
                    <div className="col-md-12 text-justify">
                        <p>pruebas react</p>
                    </div>
        </div>)
    }
}

export default MainContentContainer