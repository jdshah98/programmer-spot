import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: Colors.colorPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    menuIcon: {
        marginEnd: 16,
        color: Colors.white
    },
    title: {
        fontSize: 16,
        color: Colors.white
    },
    subtitle: {
        fontSize: 12,
        color: Colors.white
    }
})

const CustomHeader = (props) => {
    const selectedCourse = useSelector(state => state.selectedCourse)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                props.scene.descriptor.navigation.toggleDrawer()
            }} >
                <Icon name="bars" size={20} style={styles.menuIcon}/>
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>Programmer Spot App</Text>
                <Text style={styles.subtitle}>{selectedCourse.title} Programming</Text>
            </View>
        </View>
    )
}

export default CustomHeader
