import { Pressable, Text, View } from "react-native"
import { TextInputField } from "../../components"
import { styles } from "./AuthScreenStyles"


export const SigninPart = ({signin, setActivePart}) => {

    const {formik} = signin;

    return (
        <View style={styles.authPartContainer}>
            <TextInputField
                placeholder={"Email address"}
                secureText={false}
                formik={formik}
                name={'email'}
                autoCapitalize={"none"}
            />
            <TextInputField
                placeholder={"Password"}
                secureText={true}
                formik={formik}
                name={'password'}
                autoCapitalize={"none"}

            />
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 30,
            }}>
                <View>
                    <Text>Remember me</Text>
                </View>
                <Pressable>
                    <Text style={styles.authForgotPassword}>Forgot password?</Text>
                </Pressable>
            </View>
            <Pressable style={styles.authSubmitButton} onPress={formik.handleSubmit}>
                <Text style={styles.authSubmitButtonText}>
                    Sign In
                </Text>
            </Pressable>
            <Text style={styles.authBottomLine} onPress={() => setActivePart("signup-1")}>
                Don't have an Account?
            </Text>
        </View>
    )
}
