import 'babel-polyfill'
import React,{Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Router , browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'


const store = configureStore( initialState )
const history = syncHistoryWithStore( browserHistory, store )


ReactDOM.render(
     <Provider store={store}>
          <Router history={history} routes={routes} />
     </Provider>,
     document.getElementById('root')
)
