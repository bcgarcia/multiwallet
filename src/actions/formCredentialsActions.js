import { CHANGE_FORM,SET_AUTH} from '../constants/actions'


/**
 * Sets the form state
 * @param  {object} newState          The new state of the form
 * @param  {string} newState.username.value The new text of the username input field of the form
 * @param  {string} newState.password.value The new text of the password input field of the form
 * @param  {string} newState.username.state The new text of the username input field of the form
 * @param  {string} newState.password.state The new text of the password input field of the form
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeForm(newState) {return { type: CHANGE_FORM, payload: newState };}

