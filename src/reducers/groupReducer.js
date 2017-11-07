import moment from 'moment'
 import { GET_GROUPS_OK , GET_GROUPS_FAIL } from '../constants/actions'

import initialState from './initialState'

/**
 * reducer : function with a switch, receives a type and changes a piece of state 
 * but not modifies (it generates and returns a copy) 
 * 
 * initialstate :
 *  list        : [],
 *  loaded      : false,
 *  groupActive : null,
 *  error       : null
 */

 export default function groupReducer(state = initialState.groups , actions ){

    switch ( actions.type ) {
        
        case GET_GROUPS_OK:
            
            return{
                ...state,
                error           : true,
                loaded          : true,
                list            : actions.payload
            }
        
        case GET_GROUPS_FAIL:
            
            return{
                ...state,
                error: false,
                loaded: true,
                list : []
            }
        
    
        default:
            return state
    }
}