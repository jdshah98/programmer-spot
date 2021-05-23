import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../../assets/styles'

const ModuleCard = ({ item }) => {
    return (
        <View key={item.id} style={styles.largeModuleCard}>
            <Image source={item.logo} style={styles.largeModuleImage} />
            <Text style={styles.largeModuleText}>{item.title}</Text>
        </View>
    )
}

export default React.memo(ModuleCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
