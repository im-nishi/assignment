import { useFormik } from 'formik';
import { Alert } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email address").required("Please enter email address"),
    password: Yup.string().min(3, "Password length should be more than 3")
    .max(10, 'Password length should be less than 10').required("Please enter password")
})

export const useSignin = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Alert('', "Signin now", [
                {text: "OK"}
            ])
        }
    })

    return {
        formik
    }
}