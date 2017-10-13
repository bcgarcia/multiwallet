import React,{Component} from 'react'
import PropTypes from 'prop-types'
import lodash from 'lodash'
import auth from '../../../utils/localStorage'
import {browserHistory} from 'react-router'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

class AuthorizedComponent extends Component {

    // static propTypes = {
    //     routes: PropTypes.array.isRequired
    // }
 
    // static contextTypes = {
    //     router: PropTypes.object.isRequired
    // }


    componentWillMount(){
        const { routes } = this.props; // array of routes
        const { router } = this.props;

        console.log('props')
        console.log(this.props)

        console.log('routes')
        console.log(routes)
        console.log('router')
        console.log(router)
        
        //check if user is logged (token in localstorage)
        if (!auth.loggedIn() ) {
            // redirect to login if not
            // browserHistory.push('/login');
        }

        //get user
        const user = this.props.userActions.getUserByToken()
        //get all roles available for this route

        console.log(user)
        // const routeRoles = lodash.chain

    }

}


// function mapStateToProps(state){
//     return{
//     }
// }
// function mapDispatchToProps(dispatch){
//     return {
//         userActions:    bindActionCreators(userActions, dispatch),
//         appActions:     bindActionCreators(appActions, dispatch)
//     }
// }
// export default connect( mapStateToProps , mapDispatchToProps )(AuthorizedComponent)
export default AuthorizedComponent