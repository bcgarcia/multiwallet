import {SENDING_REQUEST,SET_AUTH,SET_ERROR_MESSAGE} from '../constants/actions';
import initialState from './initialState'

export default function appReducer(state = initialState.app, action) {
  
    switch (action.type) {
        
        case SET_AUTH:
            return {
                ...state,
                loggedIn : action.payload
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
