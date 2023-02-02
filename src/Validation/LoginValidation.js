export const Validation = (values) => {
    // console.log("===>", values)
    let errors = {}
    if (!values.email) {
        errors.email = "Please Enter email"
        // console.log("===>", email)
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Enter Valid email"
        // console.log("===>", email)
    }

    if (!values.password) {
        errors.password = "Please Enter Password"
        // console.log("===>", Password)
    }
    else if (values.password.length < 4) {
        errors.password = "password min should in 4 characters"
    }
    else if (values.password.length > 10) {
        errors.password = "password max should be 10 characters"
    }
    return errors
}