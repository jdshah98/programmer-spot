import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../assets/styles"

const DrawerHeader = (props) => {
    return (
        <View style={styles.toolbarView}>
            <Icon name="microsoft-xbox-controller-menu" size={36} style={styles.menuIcon} />
            <View>
                <Text style={styles.toolbarTitle}>{props.title}</Text>
                <Text style={styles.toolbarSubTitle}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

export default DrawerHeader