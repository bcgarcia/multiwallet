import {CHANGE_REGISTER_FORM,USER_ALREADY_REGISTERED} from '../constants/actions';
import InitialState from './initialState.js'

export default function formRegisterReducer(state = InitialState.formRegister , actions){
    switch(actions.type){
        case USER_ALREADY_REGISTERED:
            Object.assign(state, actions.payload);
            return {
                ...state,    
            }
        
        case CHANGE_REGISTER_FORM:
            Object.assign(state, actions.payload);
            return {
                ...state,
                //registerForm: [...state.email, actions.payload ]    
            }
        default:
            //console.debug('notification reducer :: hit default', action.type);
        return state;
    } 
}