import * as yup from "yup";

// Password regex to require one upper, one lower, one number, one special character, and at least 8 characters.
const pass_regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

export const signupSchema = yup.object({
    name: yup.string().min(3, "Name must be at least 3 characters").required(""),
    email: yup.string().email("Please enter a valid email").required(""),
    phone: yup.string().length(10, "Phone number must be exactly 10 digits").required(""),
    password: yup.string().matches(pass_regex, "Please correct your password").required(""),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("")
});
