import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import colors from '../../resources/colors'
import {
    c_language_logo,
    cpp_language_logo,
    java_language_logo,
    python_language_logo
} from '../../resources/images'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Entypo'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawer_header: {
        backgroundColor: colors.colorPrimary,
        padding: 16,
    },
    drawer_link: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 8
    },
    drawer_link_icon: {
        fontSize: 24
    },
    drawer_link_text: {
        fontSize: 14,
        paddingStart: 16,
        flex: 1,
        color: colors.darkGray
    },
    drawer_array_icon: {
        color: colors.gray,
        fontSize: 18
    },
    logo_container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 42,
        height: 42,
    },
    change_language_link: {
        backgroundColor: colors.white,
        borderRadius: 18,
        height: 36,
        paddingHorizontal: 16,
        paddingVertical: 5,
        width: 150,
        marginStart: 10,
        fontSize: 16
    },
    change_course_link: {
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
            <View style={styles.drawer_header}>
                <View style={styles.change_course_link}>
                    <TouchableOpacity style={styles.logo_container} onPress={() => {
                        props.navigation.navigate("ChangeCourse")
                        props.navigation.closeDrawer()
                    }}>
                    <Image source={renderImage()} style={styles.logo} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("ChangeCourse")
                        props.navigation.closeDrawer()
                    }}>
                        <Text style={styles.change_language_link} numberOfLines={1}>Change Language</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colors.white, marginTop: 8 }}>Programmer Spot</Text>
                <Text style={{ color: colors.white }}>help@shahstudio.com</Text>
            </View>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawer_link}>
                    <Icon style={styles.drawer_link_icon} name="info-with-circle" />
                    <Text style={styles.drawer_link_text}>About App</Text>
                    <Icon style={styles.drawer_array_icon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawer_link}>
                    <Icon style={styles.drawer_link_icon} name="user" />
                    <Text style={styles.drawer_link_text}>About Us</Text>
                    <Icon style={styles.drawer_array_icon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawer_link}>
                    <Icon style={styles.drawer_link_icon} name="mail" />
                    <Text style={styles.drawer_link_text}>Feedback</Text>
                    <Icon style={styles.drawer_array_icon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawer_link}>
                    <Icon style={styles.drawer_link_icon} name="lock" />
                    <Text style={styles.drawer_link_text}>Terms &amp; Privacy Policy</Text>
                    <Icon style={styles.drawer_array_icon} name="chevron-right" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // props.navigation.navigate("AboutApp")
                props.navigation.closeDrawer()
            }}>
                <View style={styles.drawer_link}>
                    <Icon style={styles.drawer_link_icon} name="share" />
                    <Text style={styles.drawer_link_text}>Share</Text>
                    <Icon style={styles.drawer_array_icon} name="chevron-right" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer
