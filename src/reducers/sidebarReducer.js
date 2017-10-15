import { TOGGLE_SIDEBAR, SIDEBAR_GROUP_OPTIONS_COLLAPSED, SIDEBAR_USER_COLLAPSED, SIDEBAR_GROUP_COLLAPSED, SIDEBAR_EVENTS_COLLAPSED } from '../constants/actions';
import InitialState from './initialState.js'

export default function sidebarStateReducer(state = InitialState.sidebar , actions){
    switch(actions.type){
        case TOGGLE_SIDEBAR:
            Object.assign(state, actions.payload);
            return {
                ...state,  
                sidebarOpen : actions.payload  
            }
        
        
        default:
            //console.debug('notification reducer :: hit default', action.type);
        return state;
    } 
}