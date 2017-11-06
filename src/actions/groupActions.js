import { GET_GROUPS_OK , GET_GROUPS_FAIL } from '../constants/actions'
import _ from 'lodash'
import API from '../api'
import {addNotification} from './notificationActions'
import validator from '../utils/validator'
import {sendingRequest} from './userActions'
import {errorMessages} from '../constants/errorMessages'
// import {browserHistory} from 'react-router'
// import {anyElementsEmpty, toString} from '../utils/utils'


export function getGroups(findOptions){
    return async ( dispatch ) =>{
        dispatch( sendingRequest(true) )
        try {
            const responseD = await API.group.getGroups(findOptions)
            const response = await responseD
            
            if( response.status == 500 ){
                dispatch(sendingRequest(false))
                dispatch( getGroupsFail({ error: errorMessages.SERVER_NO_RESPONSE}) )
            }
            else if( response.status == 400 ){
                dispatch(sendingRequest(false))
                dispatch( getGroupsFail({ error: errorMessages.SERVER_UNAUTHORIZED}) )
                forwardTo('/login')
            }
            else if( response.status == 200 ){
                dispatch( sendingRequest(false) )
                dispatch( newGroupOk( response.groups ) )
            }
        } 
        catch (error) {
            dispatch( sendingRequest(false) )
            dispatch( getGroupsFail(error) )
        }
    }
}

/**
 * get all groups succesfully
 * @param {object} list 
 */
export function getGroupsOk(list){ return({ type:GET_GROUPS_OK , payload : list }) }

/**
 * fail getting all groups
 * @param {object} list 
 */
export function getGroupsFail(error){ return({ type:GET_GROUPS_FAIL , payload : error }) }
