import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import colors from '../../resources/colors'

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 48,
        height: 48
    },
    text: {
        color: colors.black,
        fontSize: 12        
    }
})

const TechCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.logo} style={styles.logo} />
            <Text style={styles.text}>{item.title}</Text>            
        </View>
    )
}

export default React.memo(TechCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
