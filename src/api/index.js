import firebase from 'firebase'
import fetch from 'isomorphic-fetch'
import firebaseConfig from '../constants/configFirebase'
import auth from '../utils/auth'

firebase.initializeApp(firebaseConfig);

const API = {
    user:{

        async register( email , password ){
            
            if( auth.loggedIn() ) return ;
            
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const user = {
                uid: response.uid,
                displayName : response.displayName,
                emailVerified: response.emailVerified,
                email : response.email,
                phone : response.phoneNumber,
                photoURL : response.photoURL,
                token: response.refreshToken, 
            }
            return await user
        },


        async login(email, password){

            if(auth.loggedIn) return 
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            const user = {
                uid: response.uid,
                displayName : response.displayName,
                emailVerified: response.emailVerified,
                email : response.email,
                phone : response.phoneNumber,
                photoURL : response.photoURL,
                token: response.refreshToken, 
            }
            console.log(user)
            //save user logged token in localstorage 
            localStorage.token = user.token
            return await user
        }
    },

    wallet:{

    }

}

export default API
