import { StyleSheet } from "react-native"
import Colors from "./colors"

const styles = StyleSheet.create({
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
    homeBackground: {
        backgroundColor: Colors.lightPurple
    },
    topModuleList: {
        backgroundColor: Colors.colorPrimary,
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom: 8
    },
    largeModuleList: {
        backgroundColor: Colors.white,
        padding: 8,
        marginBottom: 16
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
        alignItems: "center"
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
        height: 72,
        marginBottom: 4
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
    },
    menuIcon: {
        color: Colors.white,
        marginEnd: 16
    },
    searchIcon: {
        color: Colors.white,
        marginEnd: 8
    },
    techList: {
        backgroundColor: Colors.white,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    techCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    techImage: {
        width: 48,
        height: 48
    },
    techText: {
        color: Colors.black,
        fontSize: 12
    },
    verticalSeprator: {
        backgroundColor: Colors.gray,
        width: 2
    }
})

export default styles