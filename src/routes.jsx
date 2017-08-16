import React from 'react'
import {Route , IndexRoute} from 'react-router'

import App from './App'
import RegisterContainer from './components/register/RegisterContainer'
import LoginContainer from './components/login/LoginContainer'
import MainContentContainer from './components/mainContent/MainContentContainer'
import DashboardContainer from './components/Dashboard/DashboardContainer'
import NotFound from './components/notFound/NotFound'

export default 
(<Route path="/" component={App} >
    <IndexRoute component={MainContentContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
    <Route path="*" component={NotFound} />
</Route>)