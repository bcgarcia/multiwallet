import React from 'react'
import PropTypes from 'prop-types'
//import {bindActionCreators} from 'redux'
//import {connect} from 'react-redux'
//import * as userActions from '../../actions/userActions'

const Dashboard = () =>(
    <article>
        <section className="text-section">
          <div className="jumbotron">
        <h1>Marketing stuff!</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, 
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Get started today</a></p></div>
        </section>
      </article>
)

/*
function mapDispatchToProps(dispatch){
    return{
        userActions : bindActionCreators( userActions , dispatch)
    }
}

function mapStateToProps(state){

    return {
        userState : state.user,
        app : state.app
    }
}

export default connect( mapStateToProps , mapDispatchToProps )( Dashboard )

*/
export default Dashboard