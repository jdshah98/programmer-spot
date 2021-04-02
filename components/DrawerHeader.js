import React from 'react'
import { Text, View } from 'react-native'
import styles from "../assets/styles"

const DrawerHeader = (props) => {
    return (
        <View style={styles.toolbarView}>
            <View>
                <Text style={styles.toolbarTitle}>{props.title}</Text>
                <Text style={styles.toolbarSubTitle}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

export default DrawerHeader