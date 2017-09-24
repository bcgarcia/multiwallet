import auth from '../utils/auth'
import API from '../api'
const initialState = {

    app:{
        currentlySending: false,
        loggedIn: auth.loggedIn(),
        errorMessage: ''
    },
    sidebar:{
        usersCollapsed: true,
        eventsCollapsed: true,
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
        emailVerified   :false,
        photoURL        :'',
        token           :'',
        uid             : '',
        error           : null
    }
}

export default initialState