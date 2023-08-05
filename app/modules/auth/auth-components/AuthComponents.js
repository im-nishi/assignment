import { Pressable, Text, View } from "react-native"
import { styles } from "../AuthScreenStyles"

export const AuthTabs = ({ activePart, setActivePart }) => {

    const doSignin = () => setActivePart("signin-1");
    const doSIgnup = () => setActivePart("signup-1");

    if(activePart === "signup-2"){
        return (
            <>
            </>
        )
    }
    else{
        return (
            <View style={styles.authTabContainer}>
                <Pressable style={styles.authTab1} onPress={doSignin}>
                    <Text style={activePart === "signin-1" ? styles.authActiveTabText : styles.authTabText}>
                        Sign In
                    </Text>
                </Pressable>
                <View style={styles.authTabSaparator}>
                    <Text>|</Text>
                </View>
                <Pressable style={styles.authTab2} onPress={doSIgnup}>
                    <Text style={activePart === "signup-1" ? styles.authActiveTabText : styles.authTabText}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>
        )
    }
}
