
/*
 * actions
 * These are the variables that determine what our central data store (reducers)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * good practices format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

export const CHANGE_CREDENTIALS_FORM            = 'CHANGE_CREDENTIALS_FORM';
export const CHANGE_REGISTER_FORM               = 'CHANGE_REGISTER_FORM';
export const SET_AUTH                           = 'SET_AUTH';
export const SENDING_REQUEST                    = 'SENDING_REQUEST';
export const SET_ERROR_MESSAGE                  = 'SET_ERROR_MESSAGE';
export const USER_ALREADY_REGISTERED            = 'USER_ALREADY_REGISTERED';
export const REGISTER_USER_INIT                 = 'REGISTER_USER_INIT'
export const FORGOT_PASSWORD_INIT               = 'FORGOT_PASSWORD_INIT'
export const LOGIN_USER_INIT                    = 'LOGIN_USER_INIT'
export const REGISTER_USER_FAIL                 = 'REGISTER_USER_FAIL'
export const LOGIN_USER_FAIL                    = 'LOGIN_USER_FAIL'
export const FORGOT_PASSWORD_FAIL               = 'FORGOT_PASSWORD_FAIL'
export const REGISTER_USER_OK                   = 'REGISTER_USER_OK'
export const LOGIN_USER_OK                      = 'LOGIN_USER_OK'
export const FORGOT_PASSWORD_OK                 = 'FORGOT_PASSWORD_OK'
export const ADD_NOTIFICATION                   = 'ADD_NOTIFICATION'
export const TOGGLE_HEADER                      = 'TOGGLE_HEADER'
export const TOGGLE_USER_NOTIFICATIONS          = 'TOGGLE_USER_NOTIFICATIONS'
export const TOGGLE_USER_OPTIONS                = 'TOGGLE_USER_OPTIONS'
export const TOGGLE_SIDEBAR                     = 'TOGGLE_SIDEBAR'
export const GET_USER                           = 'GET_USER'
export const GET_USER_FAIL                      = 'GET_USER_FAIL'
export const GET_USER_OK                        = 'GET_USER_OK'
export const UPDATE_USER_FAIL                   = 'UPDATE_USER_FAIL'
export const UPDATE_USER_OK                     = 'UPDATE_USER_OK'

 