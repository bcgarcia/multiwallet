import React,{Component} from 'react'
import PropTypes from 'prop-types'
import auth from '../../../utils/localStorage'
import lodash from 'lodash'
import {browserHistory} from 'react-router'
 import {connect} from 'react-redux'
 import {bindActionCreators} from 'redux'
 import * as userActions from '../../../actions/userActions'
import * as appActions from '../../../actions/appActions'

class AuthorizedComponent extends Component {

    constructor(props){
        super(props)
    }

    async componentDidMount(){
        const { routes } = this.props; // array of routes
        const { router } = this.props;

        console.log(this.props.userActions)
        //check if user is logged (token in localstorage)
        if (!auth.loggedIn() ) browserHistory.push('/login')

        if(this.props.user == null ){
            //get user
            const response = await this.props.userActions.getUserByToken()
            //get all roles available for this route

            const user = await response
            console.log('authorized')
            console.log(user)
            console.log('----------')
        }
    }

}


 function mapStateToProps(state){
     return{
         user: state.user
     }
 }
 function mapDispatchToProps(dispatch){
     return {
         userActions:    bindActionCreators(userActions, dispatch),
         appActions:     bindActionCreators(appActions, dispatch)
     }
 }
 export default connect( mapStateToProps , mapDispatchToProps )(AuthorizedComponent)
//export default AuthorizedComponent