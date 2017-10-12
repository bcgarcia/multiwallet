import fetch from 'isomorphic-fetch'
import auth from '../utils/localStorage'

const baseURL = "localhost:8088/api"

const TOKEN = auth.loggedIn()

const API = {
    user: {

        async get(id) {
            const response = await fetch(baseURL + '/user/' + id, {
                method: 'get',
                headers: new Headers( {'Authorization': 'bearer:'+TOKEN } ),
            })
            return await response.json()
        },

        async login(data) {

            const response = await fetch(baseURL + '/login', {
                method: 'post',
                headers: new Headers({
                    'Authorization': 'bearer:'+TOKEN ,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    //'Accept': 'application/json',
                }),
                body: new FormData(data)
            })
            return await response.json()
        },

        async register(user) {

           const response = await fetch(baseURL+'/register', {
               method: 'post',
               headers: new Headers({
                'Authorization': 'bearer:'+TOKEN ,
                'Content-Type': 'application/x-www-form-urlencoded',
                //    'Accept': 'application'
               }),
               body: new FormData(user)
           })
           return await response.json();
        },

        async update(user){

            const response = await fetch(baseURL+'/user/'+user.id , {
                method : 'put',
                headers: new Headers({
                    'Authorization': 'bearer:'+TOKEN ,
                'Content-Type': 'application/x-www-form-urlencoded',
                }),
                body: new FormData(user)
            })
        },
    },

    group: {

    }

}

export default API
