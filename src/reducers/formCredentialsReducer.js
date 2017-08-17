import {CHANGE_FORM} from '../constants/actions';
import InitialState from './initialState.js'

export default function formCredentialsReducer(state = InitialState.formCredentials , actions){
    switch(actions.type){
        case CHANGE_CREDENTIALS_FORM:
            return {
                ...state,
                state.username.value : 
            }
        default:
            //console.debug('notification reducer :: hit default', action.type);
        return state;
    } 
}