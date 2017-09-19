
/**
 * Authentication lib
 * @type {Object}
 */

const auth = {
    /**
     * Checks if anybody is logged in
     * @return {boolean} True if there is a logged in user, false if there isn't
     */
    loggedIn() { return !!localStorage.token}
}

export default auth
