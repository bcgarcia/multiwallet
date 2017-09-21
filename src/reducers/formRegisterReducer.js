import {CHANGE_REGISTER_FORM} from '../constants/actions';
import InitialState from './initialState.js'

export default function formRegisterReducer(state = InitialState.formRegister , actions){
    switch(actions.type){
        case CHANGE_REGISTER_FORM:
            Object.assign(state, actions.payload);
            return {
                ...state,    
            }
        default:
            //console.debug('notification reducer :: hit default', action.type);
        return state;
    } 
}