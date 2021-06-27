import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../resources/colors'

const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 140,
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 90,
        height: 90
    },
    text: {
        color: colors.black,
        textAlign: 'center'
    }
})

const ModuleCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity 
            style={styles.card}
            activeOpacity={0.6} 
            onPress={() => {
                navigation.navigate(item.navigateTo)
            }}
        >
            <Image source={item.logo} style={styles.logo} />
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(ModuleCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
