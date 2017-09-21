import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import userReducer from './userReducer'
import notification from './notificationReducer'
import appReducer from './appReducer'
import formCredentialsReducer from './formCredentialsReducer'
import formRegisterReducer from './formRegisterReducer'

//import {reducer as formReducer} from 'redux-form'



const rootReducer = combineReducers({
     routing: routerReducer,
     notification,
     user : userReducer,
     app:appReducer,
     formCredentials : formCredentialsReducer,
     formRegister: formCredentialsReducer
})

export default rootReducer