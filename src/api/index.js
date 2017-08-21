import firebase from 'firebase'
import fetch from 'isomorphic-fetch'
import firebaseConfig from '../constants/configFirebase'
//import auth from '../utils/auth'

firebase.initializeApp(firebaseConfig);

const API = {
    user:{

        async currentUser(){

            await firebase.auth().currentUser()
        },

        async signInWithToken(){
            /*
            console.log('currentuser')
            const response1 = await firebase.auth().currentUser
            console.log(response1)
            */

            const response = await firebase.auth().signInWithCustomToken(localStorage.token)

            console.log('signinwithtoken')
            console.log(response)
            return await response
        },

        async register( email , password ){

            //if( auth.loggedIn() ) return ;
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

            //if(auth.loggedIn) return 
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
            return await user
        },


        async logout(){

            await firebase.auth().signOut()
        }
    },

    wallet:{

    }

}

export default API
