import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    authScreenContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    topBannerContainer: {
        position: "relative",
        width: "100%",
        height: 200
    },
    topBannerImage: {
        width: Dimensions.get("window").width,
        height: 200
    },
    authTitleText: {
        textAlign: "center",
        marginVertical: 30,
        fontWeight: "600",
        color: "blue",
        fontSize: 25,
        marginBottom: 20,
    },
    authAboutText: {
        textAlign: "center",
        marginHorizontal: 40,
        fontSize: 15,
        color: "black",
    },
    authTabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    authTab1: {

    },
    authTabSaparator: {
        marginHorizontal: 10
    },
    authTab2: {

    },
    authTabText: {
        color: "black",
        fontSize: 18,
        fontWeight: "500"
    },
    authActiveTabText: {
        color: "blue",
        fontSize: 18,
        fontWeight: "500"
    },
    authPartContainer: {
        marginTop: 20,
    },
    authSubmitButton: {
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 10,
    },
    authSubmitButtonText: {
        textAlign: "center",
        color: "white",
    },
    authForgotPassword: {
        color: "blue",
        textDecorationLine: "underline"
    },
    authBottomLine: {
        color: "blue",
        textDecorationLine: "underline",
        textAlign: "center",
        marginVertical: 20,
    }
})
