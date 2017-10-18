import moment from 'moment'
import {
    REGISTER_USER_FAIL , REGISTER_USER_OK , 
    LOGIN_USER_FAIL , LOGIN_USER_OK,GET_USER_FAIL,GET_USER_OK,UPDATE_USER_FAIL,UPDATE_USER_OK,
    REGISTER_USER_INIT , LOGIN_USER_INIT
} from '../constants/actions'

import initialState from './initialState'

/**
 * reducer : function with a switch, receives a type and changes a piece of state 
 * but not modifies (it generates and returns a copy) 
 */

 export default function userReducer(state = initialState.user , actions ){

    switch ( actions.type ) {
        
        case REGISTER_USER_FAIL:
            
            return{
                ...state,
                error           : true,
                loaded          : true
            }
        
        case REGISTER_USER_OK:
            
            return{
                ...state,
                error: false,
                loaded: true
            }

        case GET_USER_OK:
            
            return{
                ...state,
                displayName     : actions.payload.name,
                email           : actions.payload.email,
                emailVerified   : actions.payload.emailVerified,
                image           : actions.payload.image,
                id              : actions.payload._id,
                lastLogin       : moment.unix(actions.payload.lastLogin).format('DD-MM-YYYY'),
                registeredDate  : moment.unix(actions.payload.registeredDate).format('DD-MM-YYYY'),
                birthDate       : moment.unix(actions.payload.birthDate).format('DD-MM-YYYY'),
                error           : false,
                loaded          : true
            }
        case GET_USER_FAIL:
            
            return{
                ...state,
                error           : true,
                loaded          : true
            }
        case UPDATE_USER_OK:
            
            return{
                ...state,
                displayName     : actions.payload.name,
                email           : actions.payload.email,
                emailVerified   : actions.payload.emailVerified,
                image           : actions.payload.image,
                birthDate       : actions.payload.birthDate,
                error           : false,
                loaded          : true
            }
        case UPDATE_USER_FAIL:
            
            return{
                ...state,
                error           : true,
                loaded          : true
            }

        case LOGIN_USER_FAIL:
            return{
                ...state,
                error           : true,
                loaded          : true
            }
    
        case LOGIN_USER_OK:
            
            return{
                ...state,
                error           : false,
                loaded          : true
                
            }
    
        default:
            return state
    }
}