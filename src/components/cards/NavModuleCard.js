import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../../assets/styles'

const NavModuleCard = ({ item }) => {
    return (
        <View style={styles.topModuleCard}>
            <View style={styles.topModuleImageLayout}>
                <Image source={item.logo} style={styles.topModuleImage} />
            </View>
            <Text style={styles.topModuleText}>{item.title}</Text>
        </View>
    );
}

export default React.memo(NavModuleCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
