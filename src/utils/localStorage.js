
/**
 * getLocalStorage app state
 * @type {Object}
 */

const storagedState = {
    /**
     * Checks header state
     * @return {boolean} True if collapsed, false if there isn't
     */
    toggleHeaderState() { 
        if(localStorage.getItem('toggleHeader') == undefined ) return true 
        return localStorage.toggleHeader == 'true' ?  true : false
    },
    
    
    /**
     * Checks sidebar state
     * @return {boolean} True if collapsed, false if there isn't
     */
    toggleSidebarState() { 
        if(localStorage.getItem('toggleSidebar') == undefined ) return true 
        return localStorage.toggleSidebar == 'true' ?  true : false
    },

     /**
     * Checks if anybody is logged in
     * @return {boolean} string token if there is a logged in user
     */
    userToken() { return localStorage.getItem('pachangatron-tkn')},
     
    /**
     * get the token if loged in
     * @return {boolean} True if there is a logged in user, false if there isn't
     */
    loggedIn() { return localStorage.getItem('pachangatron-tkn') === null ? false : true }
}

export default storagedState
