import { Text, TextInput, View } from "react-native"
import { inputStyles } from "./InputFieldStyles"

export const TextInputField = ({ placeholder, secureText, formik, name, autoCapitalize="sentences" }) => {

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur } = formik;

    return (
        <>
            <View style={{
                marginBottom: 20
            }}>
                <View style={inputStyles.inputContainer}>
                    <TextInput
                        style={inputStyles.inputStyle}
                        placeholder={placeholder}
                        secureTextEntry={secureText}
                        placeholderTextColor={"grey"}
                        onChangeText={handleChange(name)}
                        onBlur={handleBlur(name)}
                        value={values[name]}
                        autoCapitalize={autoCapitalize}
                    />

                </View>
                <View style={{
                    marginHorizontal: 30,
                    paddingLeft: 15,

                }}>
                    {touched[name] && errors[name] && (
                        <Text style={{ color: "red", fontSize: 13 }}>{errors[name]}</Text>
                    )}
                </View>
            </View>

        </>
    )
}



export const MobileTextInputField = ({ placeholder, secureText, formik, name }) => {

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur } = formik;

    return (
        <>
            <View style={{
                marginBottom: 20
            }}>
                <View style={inputStyles.inputContainer}>
                    <TextInput
                        style={inputStyles.inputStyle}
                        placeholder={placeholder}
                        secureTextEntry={secureText}
                        placeholderTextColor={"grey"}
                        onChangeText={handleChange(name)}
                        onBlur={handleBlur(name)}
                        value={values[name]}
                        keyboardType={"phone-pad"}
                        maxLength={10}
                    />

                </View>
                <View style={{
                    marginHorizontal: 30,
                    paddingLeft: 15,

                }}>
                    {touched[name] && errors[name] && (
                        <Text style={{ color: "red", fontSize: 13 }}>{errors[name]}</Text>
                    )}
                </View>
            </View>

        </>
    )
}