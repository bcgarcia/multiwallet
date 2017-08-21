import auth from '../utils/auth'
import API from '../api'
const initialState = {

    app:{
        currentlySending: false,
        loggedIn: auth.loggedIn(),
        errorMessage: ''
    },
    formCredentials: {
        username: {
            value : '',
            state : null
        },
        password: {
            value : '',
            state : null
        }
    },
    user:{
        displayName     : '',
        email           : '',
        emailVerified   :false,
        phone           :'',
        photoURL        :'',
        token           :'',
        uid             : '',
        error           : null
    },
    wallets: {
        list            :[],
        loading         :false,
        error           :false
    },
    walletActive:{
        loading         :false,
        error           : false,
        owner           :false
    }
}

export default initialState