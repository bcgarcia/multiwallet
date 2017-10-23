import localStorage from '../utils/localStorage'
import API from '../api'

const initialState = {

    app:{
        currentlySending: false,
        loggedIn: localStorage.loggedIn(),
        errorMessage: '',
        headerOpen: localStorage.toggleHeaderState(),
        userNotificationsOpen: false,
        userOptionsOpen: false
    },
    sidebar:{
        sidebarOpen : localStorage.toggleSidebarState() ,
        userOptionsCollapsed: true,
        eventsCollapsed: true,
        groupCollapsed: true,
        groupOptionsCollapsed: true,
    },
    formCredentials: {
        username: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        },
        password: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        }
    },
    formRegister: {
        email: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        },
        name: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        },
        birthdate: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        },
        password: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        },
        rpassword: {
            value : '',
            state : null,
            error : false,
            errorMessage: null
        }
    },
    user:{
        displayName     : '',
        email           : '',
        emailVerified   : '',
        photoURL        : '',
        birthDate       : '',
        registeredDate  : '',
        lastLogin       : '',
        token           : '',
        uid             : '',
        error           : null,
        loaded          : false,
        groups:{
            list        : [],
            loaded      : false,
            groupActive : null,
            error       : null
        },
        events:{
            list        : [],
            loaded      : false,
            groupActive : null,
            error       : null
        },
    },
    groups:{
        list        : [],
        loaded      : false,
        groupActive : null,
        error       : null
    },
    events:{
        list        : [],
        loaded      : false,
        groupActive : null,
        error       : null
    }
    
}

export default initialState