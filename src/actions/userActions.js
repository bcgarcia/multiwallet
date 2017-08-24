import { 
    REGISTER_USER_OK , LOGIN_USER_OK , FORGOT_PASSWORD_OK, 
    REGISTER_USER_FAIL , LOGIN_USER_FAIL , FORGOT_PASSWORD_FAIL ,
    ADD_NOTIFICATION,CHANGE_CREDENTIALS_FORM,SENDING_REQUEST,SET_ERROR_MESSAGE,SET_AUTH
} from '../constants/actions'

import API from '../api'
import {browserHistory} from 'react-router'
import {addNotification} from './notificationActions'
import {errorMessages} from '../constants/errorMessages'
import {anyElementsEmpty, toString} from '../utils/utils'
import validator from '../utils/validator'

/**
 * async function to log a registered user
 * @param {*object} user 
 */
export function loginUser( user ){
    return async ( dispatch ) => {
        dispatch( ()=>{
            // Show the loading indicator, hide the last error
            dispatch(sendingRequest(true));
        })
        try {
            // If no username or password was specified, throw a field-missing error
            if (anyElementsEmpty(user)) {
                dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
                dispatch(sendingRequest(false));
                return dispatch(loginUserFail(errorMessages.FIELD_MISSING))
            }
            let errorList = validateUser(user)
            if( errorList.length > 0 ){
                dispatch( setErrorMessage(errorList.toString) ) 
                dispatch( sendingRequest(false) )
            }
            const response = await API.user.login( user.email , user.password )
            const loggedUser = await response

            localStorage.token = loggedUser.token;
            dispatch(setAuthState(true))
            dispatch(changeCredentialsForm({
                username:{value:'',state:null},
                password:{value:'',state:null}
            }));
            dispatch(sendingRequest(false) )
            dispatch( loginUserOk(loggedUser) )
            forwardTo('/dashboard');
            return
        } 
        catch (error) {
            const notif = {
                title: error.code,
                message : error.message,
                level : 'error'
            }
            dispatch(addNotification(notif) )
            return dispatch( loginUserFail(error) )
        }
    }
}


export function logout(){
    return async ( dispatch )=>{
        try {
            await API.user.logout()
            localStorage.removeItem('token');
            dispatch(setAuthState(false))
            forwardTo('/');

        } catch (error) {
            
        }
    }
}


/**
 * async function to register new user
 * @param {*object} user 
 */
export function registerUser(user){
    return async ( dispatch ) => {
        dispatch ( ()=>{
            // Show the loading indicator, hide the last error
            dispatch(sendingRequest(true));
            // If no username or password was specified, throw a field-missing error
            if (anyElementsEmpty({ username, password })) {
                dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
                dispatch(sendingRequest(false));
                return;
            }
        })

        try {
            await API.user.register(user.email , user.password)
            return dispatch(registerUserOk(user))
        } 
        catch (error) {
            /*
            const notif = {
                title: 'error occurs',
                message : error,
                level : 'error'
            }
            dispatch(addNotification(notif))
            */
            return dispatch(registerUserFail(error) )
        }
    }
}

/**
 * action throwed when a new user register fails.
 * 
 * @param {object} error 
 */
export function registerUserFail(error){ return { type:REGISTER_USER_FAIL,payload: error }  }
/**
 * new user to system ok
 * @param {object} user 
 */
export function registerUserOk(user){return{ type: REGISTER_USER_OK , payload : user }}

/**
 * registered user logins to system
 * @param {object} user 
 */
export function loginUserOk(user){
    console.log('login user ok')
    console.log(user)
    console.log(user.email)
    return {
        type:LOGIN_USER_OK , 
        payload : user 
    }
}

/**
 * registered user fails when login to system
 * @param {object} error 
 */
export function loginUserFail(error){
    
    return { type:LOGIN_USER_FAIL , payload : error }
}

/**
 * Sets the requestSending state, which displays a loading indicator during requests
 * @param  {boolean} sending The new state the app should have
 * @return {object}          Formatted action for the reducer to handle
 */
export function sendingRequest(sending) {return { type: SENDING_REQUEST, payload: sending } }



/**
 * Sets the errorMessage state, which displays the ErrorMessage component when it is not empty
 * @param message
 */
function setErrorMessage(message) {
  return (dispatch) => {
    dispatch({ type: SET_ERROR_MESSAGE, payload: message });
    const form = document.querySelector('.form-page__form-wrapper');
    if (form) {
      form.classList.add('js-form__err-animation');
      // Remove the animation class after the animation is finished, so it
      // can play again on the next error
      setTimeout(() => {
        form.classList.remove('js-form__err-animation');
      }, 150);

      // Remove the error message after 3 seconds
      /*setTimeout(() => {
        dispatch({ type: SET_ERROR_MESSAGE, payload : '' });
      }, 3000); */
    }
  }
}

/**
 * Forwards the user
 * @param {string} location The route the user should be forwarded to
 */
function forwardTo(location) {
  console.log('forwardTo(' + location + ')');
  browserHistory.push(location);
}

/**
 * validates the user before to send a api call and save the 
 * @param  {object} user The user data introduced in the credentialsform
 * @return {object}          Formatted action for the reducer to handle
 */
function validateUser(user){
    let errors = [];
    if(!validator.validEmail(user.email)){ $errors.push(errorMessages.WRONG_EMAIL) }
    if( validator.isEmpty(user.password) ){ $errors.push(errorMessages.WRONG_PASSWORD) }
    return errors
}


/**
 * Sets the form state
 * @param  {object} newState          The new state of the form
 * @param  {string} newState.username.value The new text of the username input field of the form
 * @param  {string} newState.password.value The new text of the password input field of the form
 * @param  {string} newState.username.state The new text of the username input field of the form
 * @param  {string} newState.password.state The new text of the password input field of the form
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeCredentialsForm(newState) {return { type: CHANGE_CREDENTIALS_FORM, payload: newState };}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(state){return {type: SET_AUTH , payload: state}}
