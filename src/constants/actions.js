
/*
 * actions
 * These are the variables that determine what our central data store (reducers)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * good practices format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FORM = 'CHANGE_FORM';
export const SET_AUTH = 'SET_AUTH';
export const SENDING_REQUEST = 'SENDING_REQUEST';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/**
 * USER CONSTANT ACTIONS 
 */
export const REGISTER_USER_INIT   = 'REGISTER_USER_INIT'
export const FORGOT_PASSWORD_INIT = 'FORGOT_PASSWORD_INIT'
export const LOGIN_USER_INIT        = 'LOGIN_USER_INIT'

export const REGISTER_USER_FAIL   = 'REGISTER_USER_FAIL'
export const LOGIN_USER_FAIL      = 'LOGIN_USER_FAIL'
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL'

export const REGISTER_USER_OK     = 'REGISTER_USER_OK'
export const LOGIN_USER_OK        = 'LOGIN_USER_OK'
export const FORGOT_PASSWORD_OK   = 'FORGOT_PASSWORD_OK'
/**
 * NOTIFICATION CONSTANT ACTIONS
 */
export const ADD_NOTIFICATION     = 'ADD_NOTIFICATION'




 