var  Validator = {

    validEmail(email){ return /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email) },

    isEmpty(value){ return (value) == '' ? true : false },

    validPassword(value){

        if ( value.length > 20 || value.length < 6 ) return false
        else return true
    },

    isSamePassword(pass , rpass){ return (pass == rpass) ? true : false }

}

export default Validator