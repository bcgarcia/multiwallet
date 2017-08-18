import React from 'react'
import {Route , IndexRoute} from 'react-router'

import App from './App'
import RegisterContainer from './components/register/RegisterContainer'
import LoginContainer from './components/login/LoginContainer'
import MainContentContainer from './components/mainContent/MainContentContainer'
import DashboardContainer from './components/Dashboard/DashboardContainer'
import NotFound from './components/notFound/NotFound'
import auth from './utils/auth'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'



function checkAuth(nextState , replaceState){

    let store = configureStore( initialState )
    let state = store.getState();

    
    
    if( nextState.location.pathname !== '/dashboard'){
        if (state.app.loggedIn) {
            if (nextState.location.state && nextState.location.pathname) {
                replaceState(null, nextState.location.pathname);
            } else {
                replaceState(null, '/');
            }
        }       
    }
    else{
        // If the user is already logged in, forward them to the homepage
        if (!state.app.loggedIn) {
            
            if (  nextState.location.pathname) {
                replaceState({nextPathname: nextState.location.pathname}, '/login');
            } 
            else {
                replaceState(null, '/');
            }
        }

    }

    //if()

}

export default 
(<Route path="/" component={App} >
    <IndexRoute component={MainContentContainer} />
    
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/dashboard" component={DashboardContainer} onEnter={checkAuth} />

    <Route path="*" component={NotFound} />
</Route>)