import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../../assets/styles'

const TechCard = ({ item }) => {
    return (
        <View style={styles.techCard}>
            <Image source={item.logo} style={styles.techImage} />
            <Text style={styles.techText}>{item.title}</Text>            
        </View>
    )
}

export default React.memo(TechCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
