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
import Icon from 'react-native-vector-icons/Entypo'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: Colors.colorPrimary,
        padding: 16,
    },
    drawerLink: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 8
    },
    drawerLinkIcon: {
        fontSize: 24
    },
    drawerLinkText: {
        fontSize: 14,
        paddingStart: 16,
        flex: 1,
        color: Colors.darkGray
    },
    drawerArrayIcon: {
        color: Colors.gray,
        fontSize: 18
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
        borderRadius: 18,
        height: 36,
        paddingHorizontal: 16,
        paddingVertical: 5,
        width: 150,
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
                <Text style={{ color: Colors.white, marginTop: 8 }}>Programmer Spot</Text>
                <Text style={{ color: Colors.white }}>help@shahstudio.com</Text>
            </View>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Icon style={styles.drawerLinkIcon} name="info-with-circle" />
                    <Text style={styles.drawerLinkText}>About App</Text>
                    <Icon style={styles.drawerArrayIcon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Icon style={styles.drawerLinkIcon} name="user" />
                    <Text style={styles.drawerLinkText}>About Us</Text>
                    <Icon style={styles.drawerArrayIcon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Icon style={styles.drawerLinkIcon} name="mail" />
                    <Text style={styles.drawerLinkText}>Feedback</Text>
                    <Icon style={styles.drawerArrayIcon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Icon style={styles.drawerLinkIcon} name="lock" />
                    <Text style={styles.drawerLinkText}>Terms &amp; Privacy Policy</Text>
                    <Icon style={styles.drawerArrayIcon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawerLink}>
                    <Icon style={styles.drawerLinkIcon} name="share" />
                    <Text style={styles.drawerLinkText}>Share</Text>
                    <Icon style={styles.drawerArrayIcon} name="chevron-right" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer
