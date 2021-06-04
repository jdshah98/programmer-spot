import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from '../../assets/styles'

const NavModuleCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.topModuleCard} onPress={() => {
            navigation.navigate(item.navigateTo)
        }}>
            <View style={styles.topModuleImageLayout}>
                <Image source={item.logo} style={styles.topModuleImage} />
            </View>
            <Text style={styles.topModuleText}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(NavModuleCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
