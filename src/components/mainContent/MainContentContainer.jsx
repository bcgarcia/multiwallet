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
                        <h1 className="bd-title">MULTIWALLET</h1>
                    </div>
                </div>
                    <div className="col-md-12 text-justify">
                        <p>Multiwallet es un monedero multiusuario en el que varios usuario pueden tener uno o mas monederos</p>
                    </div>
        </div>)
    }
}

export default MainContentContainer