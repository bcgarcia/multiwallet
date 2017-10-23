import { 
    REGISTER_USER_OK , LOGIN_USER_OK , FORGOT_PASSWORD_OK,GET_USER, GET_USER_OK,GET_USER_FAIL,
    REGISTER_USER_FAIL , LOGIN_USER_FAIL , FORGOT_PASSWORD_FAIL , UPDATE_USER_FAIL , UPDATE_USER_OK,
    ADD_NOTIFICATION,CHANGE_CREDENTIALS_FORM,SENDING_REQUEST,SET_ERROR_MESSAGE,SET_AUTH,CHANGE_REGISTER_FORM,USER_ALREADY_REGISTERED
} from '../constants/actions'

import lodash from 'lodash'
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

export function checkAvailableEmail(email){
    return async(dispatch) =>{
        dispatch(sendingRequest(true))
        try {
            //const response = await API.user.checkAvailableEmail(email)
            const response ={valid: true}
            if(!response.valid){
                email.state = 'danger'
                email.error = true,
                email.errorMessage = "Email ya en uso. Elige otro"
            } 
            else{
                email.state = 'success'
                email.error = false,
                email.errorMessage = null
            }
            dispatch(sendingRequest(false))
            dispatch(availableEmail(email))
        } 
        catch (error) {
            dispatch(sendingRequest(false))
            dispatch(addNotification({
                title: error.code,
                message : error.message,
                level : 'error'
            }))
        }
    }
}


/**
 * async function to update a registered user
 * @param {*object} user 
 */

export function update(user){

    console.log('update actions',user)

    return async (dispatch) =>{
        dispatch(sendingRequest(true))
        try {
            const responseData = await API.user.update(user)
            const response = await responseData
            console.log('responseee action', response)
            if(response.status == 200 ){

                dispatch( updateUserOk(response.user) )
                dispatch( addNotification({title: 'Acción realizada', message : response.message, level : 'success'}) )
            }
            else{
                dispatch( updateUserFail({response}) )
                dispatch( addNotification({title: 'Error en acción', message : error.message, level : 'error'}) )
            }
            
            dispatch( sendingRequest(false) )

        } catch (error) {
            console.log('error-->' , error )
            dispatch( updateUserFail(error) )
            dispatch( sendingRequest(false) )
            dispatch( addNotification({title: 'Error en acción', message : error.message, level : 'error'}) )
        }

    }
}


/**
 * Sets the register form email state
 * @param  {object} newState          The new state of the form input email
 * @return {object}                   Formatted action for the reducer to handle
 */
function availableEmail(state){return {type: USER_ALREADY_REGISTERED , payload: state}}


/**
 * get user by token proporcionaterdd
 * @param  {string} token          The new state of the form input email
 * @return {object}                returns user
 */
export function getUserByToken(){
   
    return async (dispatch) =>{
        dispatch(sendingRequest(true))
        try {
            const responsePet = await API.user.getByToken( localStorage.getItem('pachangatron-tkn') )
            const response = await responsePet

            if( lodash.isEmpty(response) || response.status == 500 ){ // si la respuesta es vacía o el servidor devuelve un error 500...

                dispatch(sendingRequest(false))
                dispatch( getUserFail({error: errorMessages.SERVER_NO_RESPONSE}) )
                const notif = {title: 'error', message : errorMessages.SERVER_NO_RESPONSE, level : 'error'}
                dispatch( addNotification(notif) )
                forwardTo('/login');
            }
            else if( response.status == 400 ){ // si la respuiesta es un error 400 ..
                dispatch(sendingRequest(false))
                const notif = {title: 'error', message : response.message, level : 'error'}
                dispatch( addNotification(notif) )
                forwardTo('/login');
            }
            else if(response.status == 200 ){

                dispatch( getUserOk(response.user) )
                dispatch( sendingRequest(false) )
            }


        } catch (error) {
            dispatch( getUserFail(error) )
            dispatch( sendingRequest(false) )
        }

    }

    // return {type: GET_USER , payload: token}
}

/**
 * async function to log a registered user
 * @param {*object} user 
 */
export function getMyGroups(){

    return async ( dispatch ) =>{

        dispatch( sendingRequest(true) )
        try {
            const responsePet = await API.group.getLoggedUserGroups()
            const response = await responsePet
            if( lodash.isEmpty(response) || response.status == 500 ){ // si la respuesta es vacía o el servidor devuelve un error 500...
                dispatch(sendingRequest(false))
                dispatch( getUserGroupsFail({ error: errorMessages.SERVER_NO_RESPONSE}) )
                const notif = {title: 'error', message : errorMessages.SERVER_NO_RESPONSE, level : 'error'}
                dispatch( addNotification(notif) )
            }
            else if( response.status == 400 ){ // si la respuiesta es un error 400 ..
                dispatch(sendingRequest(false))
                dispatch( getUserGroupsFail({ error: errorMessages.SERVER_NO_RESPONSE}) )
                const notif = {title: 'error', message : response.message, level : 'error'}
                dispatch( addNotification(notif) )
                forwardTo('/login');
            }
            else if( response.status == 200 ){
                dispatch( sendingRequest( false ) )
                dispatch( getUserGroupsOk( { groups: response.groups} ) )
            }


        } catch (error) {
            dispatch( getUserFail(error) )
            dispatch( sendingRequest(false) )
            const notif = {title: 'error', message : response.message, level : 'error'}
                dispatch( addNotification(notif) )
        }

    }
}


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
            const responseD = await API.user.login( user )
            const response = await responseD
            
            if(response.token == null ){
                dispatch(sendingRequest(false) )
                const notif = {title: errorMessages.NOTIFICATION_FAIL, message : response.message, level : 'error'}
                dispatch(addNotification(notif) )
            }
            else{
                
                localStorage.setItem('pachangatron-tkn', response.token)
                dispatch(setAuthState(true))
                dispatch(changeCredentialsForm({
                    username:{value:'',state:null},
                    password:{value:'',state:null}
                }));
                dispatch(sendingRequest(false) )
                //dispatch( loginUserOk(loggedUser) )
                forwardTo('/dashboard');
                return
            }
        } 
        catch (error) {
            const notif = {title: errorMessages.NOTIFICATION_FAIL, message : error.message, level : 'error'}
            dispatch(addNotification(notif) )
            dispatch(sendingRequest(false) )
            return dispatch( loginUserFail(error) )
        }
    }
}


export function logout(){
    return ( dispatch )=>{
        // try {
            // await API.user.logout()
            localStorage.removeItem('pachangatron-tkn')
            dispatch( setAuthState(false) )
            forwardTo('/');

        // } catch (error) {
            
        // }
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
 * action throwed when a get user  fails.
 * 
 * @param {object} error 
 */
export function getUserFail(error){ return { type:GET_USER_FAIL ,payload: error }  }

/**
 * action throwed when a get user  SUCCESS.
 * 
 * @param {object} user 
 */
export function getUserOk(user){ return { type:GET_USER_OK ,payload: user }  }



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
 * action throwed when a update user  fails.
 * 
 * @param {object} error 
 */
export function updateUserFail(error){ return { type:UPDATE_USER_FAIL ,payload: error }  }

/**
 * action throwed when a UPDATE user  SUCCESS.
 * 
 * @param {object} user 
 */
export function updateUserOk(user){ return { type:UPDATE_USER_OK ,payload: user }  }


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
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeCredentialsForm(newState) {return { type: CHANGE_CREDENTIALS_FORM, payload: newState };}


/**
 * Sets the form register state
 * @param  {object} newState          The new state of the register form 
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeRegisterForm(newState) {return { type: CHANGE_REGISTER_FORM, payload: newState };}





/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(state){return {type: SET_AUTH , payload: state}}
