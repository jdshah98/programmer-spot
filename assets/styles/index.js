import { StyleSheet } from "react-native";
import Colors from "../colors";

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashLogo: {
        width: 175,
        height: 175
    },
    toolbarView: {
        height: 64,
        backgroundColor: Colors.colorPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    toolbarNavigationIcon: {
        marginEnd: 32,
        fontSize: 24,
        color: Colors.white
    },
    toolbarTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: Colors.white
    },
    toolbarSubTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.white
    },
    courseList: {
        margin: 12
    },
    courseCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        elevation: 4,
        backgroundColor: Colors.white,
        marginVertical: 4
    },
    courseTitle: {
        fontSize: 18,
        flex: 1
    },
    courseImage: {
        width: 40,
        height: 40,
        marginEnd: 8
    },
    courseContinueButton: {
        width: 150,
        height: 50,
        backgroundColor: Colors.colorPrimary,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        alignSelf: "center",
        marginBottom: 16
    },
    courseContinueButtonText: {
        color: Colors.white,
        fontSize: 16
    },
    courseSeperator: {
        width: '100%',
        height: 8,
        backgroundColor: Colors.transparent
    },
    topModuleList: {
        backgroundColor: Colors.colorPrimary,
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    largeModuleList: {
        backgroundColor: Colors.white,
        padding: 8
    },
    topModuleCard: {
        width: 108,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    largeModuleCard: {
        width: 108,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white
    },
    topModuleImageLayout: {
        width: 48,
        height: 48,
        backgroundColor: Colors.white,
        borderRadius: 24,
        marginBottom: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topModuleImage: {
        width: 32,
        height: 32
    },
    largeModuleImage: {
        width: 72,
        height: 72
    },
    topModuleText: {
        color: Colors.white
    },
    largeModuleText: {
        color: Colors.black,
        textAlign: 'center'
    },
    moduleListSeperatorText: {
        backgroundColor: Colors.white,
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 4
    },
    moduleRow: {
        flexDirection: 'row',
        marginVertical: 10
    }
})

export default styles