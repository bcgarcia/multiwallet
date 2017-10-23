import moment from 'moment'
// import {} from '../constants/actions'

import initialState from './initialState'

/**
 * reducer : function with a switch, receives a type and changes a piece of state 
 * but not modifies (it generates and returns a copy) 
 */

 export default function groupReducer(state = initialState.groups , actions ){

    switch ( actions.type ) {
        
        // case NEW_GROUP_FAIL:
            
        //     return{
        //         ...state,
        //         error           : true,
        //         loaded          : true
        //     }
        
        // case REGISTER_USER_OK:
            
        //     return{
        //         ...state,
        //         error: false,
        //         loaded: true
        //     }
        
    
        default:
            return state
    }
}