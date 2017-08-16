import {CHANGE_FORM} from '../constants/actions';
import InitialState from './initialState.js'

export default function formCredentialsReducer(state = InitialState.formCredentials , actions){
    switch(actions.type){
        case CHANGE_FORM:
            return {
                ...state
            }

        case CHANGE_FORM:
            return {
                ...state
            }
        default:
            //console.debug('notification reducer :: hit default', action.type);
        return state;
    } 
}