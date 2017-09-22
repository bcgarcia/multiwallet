import {
    REGISTER_USER_FAIL , REGISTER_USER_OK , 
    LOGIN_USER_FAIL , LOGIN_USER_OK,
    REGISTER_USER_INIT , LOGIN_USER_INIT
} from '../constants/actions'

import initialState from './initialState'

/**
 * reducer : function with a switch, receives a type and changes a piece of state 
 * but not modifies (it generates and returns a copy) 
 */

 export default function userReducer(state = initialState.user , actions ){

    switch ( actions.type ) {
        
        case REGISTER_USER_INIT:
            
            return{
                ...state,
                login: false
            }
        case REGISTER_USER_FAIL:
            
            return{
                ...state,
                loading : false,
                register: false,
                error: actions.payload
            }
        
        case REGISTER_USER_OK:
            
            return{
                ...state,
                error: null,
                user: [...state.user, actions.payload ]
            }

        case LOGIN_USER_FAIL:
            
            return{
                ...state,
                error: actions.payload,
                user: null,
            }
    
        case LOGIN_USER_OK:
            
            return{
                ...state,
                error           : null,
                displayName     : actions.payload.displayName,
                email           : actions.payload.email,
                emailVerified   : actions.payload.emailVerified,
                phone           : actions.payload.phone,
                photoURL        : actions.payload.photoURL,
                token           : actions.payload.token,
                uid             : actions.payload.uid,
            }
    
        default:
            return state
    }
}