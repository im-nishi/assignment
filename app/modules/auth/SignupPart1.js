import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./AuthScreenStyles"
import { MobileTextInputField, TextInputField } from "../../components"
import { Images } from "../../assets";


export const SignupPart1 = ({signup, setActivePart}) => {

    const {formik} = signup;

    return (
        <View style={styles.authPartContainer}>
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <View style={{
                    marginBottom: 20,
                    width: 120,
                    height: 120,
                    borderWidth: 2,
                    borderColor: "blue",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image source={Images.plus} style={{
                        width: 20,
                        height: 20,
                    }} />
                    <Text style={{
                        textAlign: "center",
                        marginTop: 10,
                        color: "black",
                    }}>
                        Upload profile picture
                    </Text>
                </View>
            </View>
            <TextInputField
                placeholder={"First Name"}
                secureText={false}
                formik={formik}
                name={'firstName'}
            />
            <TextInputField
                placeholder={"Last Name"}
                secureText={false}
                formik={formik}
                name={'lastName'}
            />
            <TextInputField
                placeholder={"Email Address"}
                secureText={false}
                formik={formik}
                name={'email'}
                autoCapitalize={"none"}
            />
            <MobileTextInputField
                placeholder={"Mobile Number"}
                secureText={false}
                formik={formik}
                name={'mobile'}
            />
            <TextInputField
                placeholder={"Password"}
                secureText={false}
                formik={formik}
                name={'password'}
                autoCapitalize={"none"}
            />
            <TextInputField
                placeholder={"Confirm Password"}
                secureText={true}
                formik={formik}
                name={'confirmPassword'}
                autoCapitalize={"none"}
            />
            <Pressable style={styles.authSubmitButton} onPress={formik.handleSubmit}>
                <Text style={styles.authSubmitButtonText}>
                    Sign up
                </Text>
            </Pressable>
            <Text style={styles.authBottomLine} onPress={() => setActivePart("signin-1")}>
                Already have an Account?
            </Text>
        </View>
    )
}
