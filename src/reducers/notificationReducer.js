import {ADD_NOTIFICATION} from '../constants/actions';

export default function notification(state = {}, action) {
  
    switch (action.type) {
        case ADD_NOTIFICATION:
        return Object.assign({}, state, {
            message: action.payload.message,
            level: action.payload.level,
            title : action.payload.title
        });

        default:
        //console.debug('notification reducer :: hit default', action.type);
        return state;
    }
}
