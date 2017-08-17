var  Validator = {

    validEmail(email){ return /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email) },

    isEmpty(value){ return trim(value) == '' ? true : false }


}


export default Validator