import { TOGGLE_HEADER,TOGGLE_USER_NOTIFICATIONS,TOGGLE_USER_OPTIONS } from '../constants/actions'

export function toggleHeader(state) {return {type: TOGGLE_HEADER,payload:state}}

export function toggleUserNotifications(state){ return { type: TOGGLE_USER_NOTIFICATIONS,payload : state } }

export function toggleUserOptions(state){ return{ type: TOGGLE_USER_OPTIONS,payload : state } }