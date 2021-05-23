import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Colors from '../../assets/colors'
import {
    c_language_logo,
    cpp_language_logo,
    java_language_logo,
    python_language_logo
} from '../../assets/images'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerLink: {
        backgroundColor: Colors.light_gray,
        height: 48,
        justifyContent: 'center',
    },
    drawerLinkText: {
        fontSize: 18,
        paddingStart: 5
    },
    margin_5: {
        margin: 5
    },
    drawerHeader: {
        backgroundColor: Colors.colorPrimary,
        padding: 10,
    },
    logoParent: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageLogo: {
        width: 42,
        height: 42,
    },
    changeLanguageLink: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        height: 28,
        paddingStart: 5,
        paddingVertical: 2,
        width: 120,
        marginStart: 10,
        fontSize: 16
    },
    changeCourseLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    }
})

const CustomDrawer = (props) => {
    const selectedCourse = useSelector(state => state.selectedCourse)

    const renderImage = useCallback(
        () => {
            switch(selectedCourse.key) {
                case 1: return c_language_logo
                case 2: return cpp_language_logo
                case 3: return java_language_logo
                case 4: return python_language_logo
            }
        },
        [selectedCourse],
    )

    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.changeCourseLink}>
                    <TouchableOpacity style={styles.logoParent} onPress={() => {
                        props.navigation.navigate("ChangeCourse")
                        props.navigation.closeDrawer()
                    }}>
                        <Image source={renderImage()} style={styles.languageLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("ChangeCourse")
                        props.navigation.closeDrawer()
                    }}>
                        <Text style={styles.changeLanguageLink} numberOfLines={1}>Change Language</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: Colors.white }}>Programmer Spot</Text>
                <Text style={{ color: Colors.white }}>help@shahstudio.com</Text>
            </View>
            {/* <TouchableOpacity style={styles.margin_5} onPress={() => {
                props.navigation.navigate("ChangeCourse")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Text style={styles.drawerLinkText}>Change Course</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

export default CustomDrawer
