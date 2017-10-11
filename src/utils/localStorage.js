
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
     * @return {boolean} True if there is a logged in user, false if there isn't
     */
    loggedIn() { return !!localStorage.token}
}

export default storagedState
