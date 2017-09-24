import React from 'react'
import {Route , IndexRoute} from 'react-router'

import App from './App'
import RegisterContainer from './components/register/RegisterContainer'
import LoginContainer from './components/login/LoginContainer'
import MainContentContainer from './components/mainContent/MainContentContainer'
import DashboardContainer from './components/private/Dashboard/DashboardContainer'
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
                console.log('iff 1')
                replaceState(null, nextState.location.pathname);
            } 
            else {
                
                console.log('else 1')
                replaceState(null, '/');
            }
        }       
    }
}

export default 
(<Route path="/" component={App} >
    <IndexRoute component={MainContentContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
    {/* TODO: HAY QUE AÑADIR CHECKAUTH ES RUTA PRIVADA! */}
    {/*<Route path="/dashboard" component={DashboardContainer} onEnter={checkAuth} /> */}
    <Route path="/dashboard" component={DashboardContainer} /> 
    
    <Route path="*" component={NotFound} />
</Route>)