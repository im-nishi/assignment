import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import { styles } from "./AuthScreenStyles"
import { Images } from "../../assets"
import { useAuth, useSignin } from "../../hooks"
import { AuthTabs } from "./auth-components"
import { SigninPart } from "./SigninPart"
import { SignupPart1 } from "./SignupPart1"
import { SignupPart2 } from "./SignupPart2"
import { useSignup } from "../../hooks/useSignup"

export const AuthScreen = () => {

    const { activePart, setActivePart } = useAuth();
    const signin = useSignin();
    const signup = useSignup();

    return (
        <View style={styles.authScreenContainer}>
            <ScrollView>

                <View style={styles.topBannerContainer}>
                    <Image source={Images.authBanner} style={styles.topBannerImage} />
                </View>
                <Text style={styles.authTitleText}>
                    {activePart ?
                        <>Welcome Back</> :
                        <>Create Account</>
                    }
                </Text>
                <Text style={styles.authAboutText}>
                    Welcome to Helpr! We are here to help you with service inquiries.
                </Text>
                <AuthTabs
                    activePart={activePart}
                    setActivePart={setActivePart}
                />
                <RenderAuthParts
                    activePart={activePart}
                    setActivePart={setActivePart}
                    signin={signin}
                    signup={signup}
                />
            </ScrollView>

        </View>
    )
}

const RenderAuthParts = ({ activePart, signin, setActivePart, signup }) => {
    if (activePart == "signin-1") {
        return <SigninPart signin={signin} setActivePart={setActivePart} />
    }
    else if (activePart == "signup-1") {
        return <SignupPart1 signup={signup} setActivePart={setActivePart} />
    }
    else {
        return <SignupPart2 />
    }

}
