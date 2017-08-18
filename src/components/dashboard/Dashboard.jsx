import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../../actions/userActions'

const Dashboard = () =>(
    <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <p>Welcome, you are logged in! To have a look at the code behind this application, go to <a href="https://github.com/mxstbr/login-flow">Github</a>. To run it locally:</p>
          <ol>
            <li><p>Clone the repo using <code>git clone git@github.com:mxstbr/login-flow</code></p></li>
            <li><p>Run <code>npm install</code> to install the dependencies.</p></li>
            <li><p>Run <code>npm start</code> to start the local web server</p></li>
            <li><p>Go to <a href="http://localhost:8080"><code>http://localhost:8080</code></a> and you should see it running!</p></li>
          </ol>
          <p>If you registered a new user, the credentials are now securely saved to localStorage. The next time you visit the website with this browser, you will be able to login with that username/password combination.</p>
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