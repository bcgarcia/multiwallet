import auth from '../utils/auth'

const initialState = {

    app:{
        currentlySending: false,
        loggedIn: auth.loggedIn(),
        errorMessage: '',
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
        user       : null,
        error      : null
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