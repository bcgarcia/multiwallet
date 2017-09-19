import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './components/common/Header'
import {connect} from 'react-redux'


import 'bootstrap'

// Import the CSS file, which webpack transfers to the build folder
import 'bootstrap/dist/css/bootstrap.css'
//https://bootsnipp.com/snippets/featured/portlets-like-panels

// Import the JS file, which webpack transfers to the build folder
//import 'bootstrap/dist/js/bootstrap.js'


class App extends Component{

    render(){
<<<<<<< HEAD
        return(<div>
            <Header loggedIn={this.props.data.app.loggedIn} currentlySending={this.props.data.app.currentlySending} />
            {this.props.children}
            
        </div>)
=======

        if(!this.props.data.app.loggedIn){
            return(<div>
                <Header loggedIn={this.props.data.app.loggedIn} currentlySending={this.props.data.app.currentlySending} />
                {this.props.children}
                <footer> Multiwallet &copy;  2017 </footer>
            </div>)
        }
        else{
            return(<div>
                {this.props.children}
            </div>)
        }
>>>>>>> 5312b378bfdf154123f0fffba1de03b1e71a31ab
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