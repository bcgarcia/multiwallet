import fetch from 'isomorphic-fetch'
import auth from '../utils/localStorage'

const baseURL = "http://localhost:8088/api"
const TOKEN = auth.userToken()

/******************************
 ******************************
 --object to consume api rest--
 ******************************
 ******************************/

const API = {
    user: {
        
        /**
         * async function to consume api rest
         * @param {*object} user 
         */
        async get(id) {
            const response = await fetch(baseURL + '/user/' + id, {
                method: 'get',
                headers: new Headers( {'Authorization': 'bearer:'+TOKEN } ),
            })
            return await response.json()
        },
        async getByToken() {
            const response = await fetch(baseURL + '/user/tkn' , {
                method: 'get',
                headers: new Headers( {'Authorization': 'bearer:'+TOKEN } ),
            })
            return await response.json()
        },

        async login(data) {
            
            const searchParams = Object.keys(data).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            }).join('&');

            const response = await fetch(baseURL + '/login', {
                method: 'POST',
                headers: new Headers({
                    //'Authorization': 'bearer:'+TOKEN ,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                }),
                // body: new FormData(data)
                body: searchParams
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

        async update(data){
            const searchParams = Object.keys(data).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            }).join('&');
            
            const responseD = await fetch(baseURL+'/user/'+data.id , {
                method : 'PUT',
                headers: new Headers({
                    'Authorization': 'bearer:'+TOKEN ,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                }),
                body: searchParams
            })
            const response = await responseD.json()
            return await response
        },
    },

    group: {

        async getLoggedUserGroups(){
            const response = await fetch(baseURL + '/group/user-groups' , {
                method: 'get',
                headers: new Headers( {'Authorization': 'bearer:'+TOKEN } ),
            })
            return await response.json()
        },

        async newGroup(group){
            const searchParams = Object.keys(group).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(group[key]);
            }).join('&');
            const response = await fetch( baseURL + '/group/' , {
                method : 'post',
                headers : new Headers({
                    'Authorization' : 'bearer:'+TOKEN ,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept' : 'application/json, application/xml, text/plain, text/html, *.*'
                }),
                body: searchParams
            })
            return await response.json()
        },

        async getUserGroups(){

            const response = await fetch(baseURL + '/group/user-groups' ,{
                method: 'get',
                headers: new Headers({
                    'Authorization' : 'bearer:'+TOKEN,
                })
            })
            return await response.json()
        },

        async getGroups(findOptions){

            const response = await fetch(baseURL+'/group/find', {
                method: 'post',
                headers: new Headers({
                    'Authorization' : 'bearer:'+TOKEN,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                })
            })
            return await response.json()
        }
    }
}

export default API
