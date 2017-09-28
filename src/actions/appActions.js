import { TOGGLE_HEADER, TOGGLE_USER_NOTIFICATIONS, TOGGLE_USER_OPTIONS, TOGGLE_SIDEBAR } from '../constants/actions'

export function toggleHeader(state) {return { type: TOGGLE_HEADER , payload:state } }

export function toggleUserNotifications(state){ return { type: TOGGLE_USER_NOTIFICATIONS , payload : state } }

export function toggleUserOptions(state){ return{ type: TOGGLE_USER_OPTIONS , payload : state } }

export function toggleSidebar(state){ return {type: TOGGLE_SIDEBAR , payload: state } }