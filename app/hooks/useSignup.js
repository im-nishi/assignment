import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too short first name").required("Please enter first name"),
    lastName: Yup.string()
        .min(2, "Too short last name").required("Please enter last name"),
    email: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email address").required("Please enter email address"),
    mobile: Yup.string().matches(/^[6-9]{1}[0-9]{9}$/, "Please enter valid mobile number").required("Please enter mobile number"),
    password: Yup.string().min(3, "Password length should be more than 3")
        .max(10, 'Password length should be less than 10').required("Please enter password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match").required("Please enter password")
})

export const useSignup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Alert('', "Signup now", [
                {text: "OK"}
            ])
        }
    })

    return {
        formik
    }
}