import { ADD_NOTIFICATION } from '../constants/actions'

export function addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    payload:{
        message : notification.message, 
        level : notification.level,
        title: notification.title
    }
  }
}