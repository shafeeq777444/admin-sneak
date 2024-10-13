import * as Yup from 'yup'

export const signupValidation=Yup.object(
    {
        name : Yup.string().min(3).required("please enter name"),
        email: Yup.string().email("enter valid email").required("please enter email"),
        password:Yup.string().min(5).required("enter password"),
        cpassword:Yup.string().oneOf([Yup.ref("password")],"password not matched").required("enter c-password") /* matched to password */

    }
)
/* study yup all method */