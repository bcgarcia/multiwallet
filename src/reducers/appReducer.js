import {SENDING_REQUEST,SET_AUTH,SET_ERROR_MESSAGE, TOGGLE_HEADER,TOGGLE_USER_NOTIFICATIONS,TOGGLE_USER_OPTIONS} from '../constants/actions';
import initialState from './initialState'

export default function appReducer(state = initialState.app, action) {
  
    switch (action.type) {
        
        case SET_AUTH:
            return {
                ...state,
                loggedIn : action.payload
            }
        case TOGGLE_HEADER:
            return {
                ...state,
                headerOpen : action.payload
            }
        case TOGGLE_USER_NOTIFICATIONS:
            return{
                ...state,
                userNotificationsOpen : action.payload
            }    
        case TOGGLE_USER_OPTIONS:
            return{
                ...state,
                userOptionsOpen : action.payload
            }    
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage : action.payload
            }

        case SENDING_REQUEST:
            return {
                ...state,
                currentlySending : action.payload
                //currentlySending : true
            }
        
        default:
        //console.debug('notification reducer :: hit default', action.type);
        return state;
    }
}
