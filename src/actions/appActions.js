import { TOGGLE_HEADER, TOGGLE_USER_NOTIFICATIONS, TOGGLE_USER_OPTIONS, TOGGLE_SIDEBAR } from '../constants/actions'

/**
 * Sets the toggle header open/close state
 * @param  {object} newState          The new state of the form input email
 * @return {object}                   Formatted action for the reducer to handle
 */
export function toggleHeader(newState) {
    localStorage.toggleHeader = newState
    return { type: TOGGLE_HEADER , payload:newState } 
}


/**
 * Sets the toggle  user notifications list open/close state
 * @param  {object} newState          The new state of the form input email
 * @return {object}                   Formatted action for the reducer to handle
 */
export function toggleUserNotifications(newState){ 
    localStorage.toggleUserNotifications = newState
    return { type: TOGGLE_USER_NOTIFICATIONS , payload : newState } 
}


/**
 * Sets the toggle user options profile options open/close state
 * @param  {object} newState          The new state of the form input email
 * @return {object}                   Formatted action for the reducer to handle
 */
export function toggleUserOptions(newState){ 
    localStorage.toggleUserOptions = newState
    return{ type: TOGGLE_USER_OPTIONS , payload : newState } 
}


/**
 * Sets the toggle sidebar  open/close state
 * @param  {object} newState          The new state of the form input email
 * @return {object}                   Formatted action for the reducer to handle
 */
export function toggleSidebar(newState){ 
    localStorage.toggleSidebar = newState
    return {type: TOGGLE_SIDEBAR , payload: newState } 
}