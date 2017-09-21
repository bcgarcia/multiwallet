import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './components/common/Header'
import {connect} from 'react-redux'



// Import the CSS file, which webpack transfers to the build folder
import 'bootstrap/dist/css/bootstrap.css'
//https://bootsnipp.com/snippets/featured/portlets-like-panels

// Import the JS file, which webpack transfers to the build folder
//import 'bootstrap/dist/js/bootstrap.js'


class App extends Component{

    render(){
        return(<div>
            <Header loggedIn={this.props.data.app.loggedIn} currentlySending={this.props.data.app.currentlySending} />
            {this.props.children}
            
        </div>)
    }
}

App.PropTypes = {
    children : PropTypes.object.isRequired,
    loggedIn : PropTypes.bool.isRequired,
    currentlySending : PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return{data : state}
}

export default connect(mapStateToProps , null)(App)