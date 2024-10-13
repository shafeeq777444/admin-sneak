import * as Yup from 'yup'
export const loginValidation = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Please enter your email"),
    password: Yup.string().min(5, "Password must be at least 5 characters").required("Please enter your password"),
});