import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../resources/colors';

const styles = StyleSheet.create({
    card: {
        width: 108,
        flex: 1,
        alignItems: 'center'
    },
    logo_container: {
        width: 48,
        height: 48,
        backgroundColor: colors.white,
        borderRadius: 24,
        marginBottom: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 32,
        height: 32
    },
    text: {
        color: colors.white
    }
})

const NavModuleCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.card} onPress={() => {
            navigation.navigate(item.navigateTo)
        }}>
            <View style={styles.logo_container}>
                <Image source={item.logo} style={styles.logo} />
            </View>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(NavModuleCard, (prevProps, nextProps) => prevProps.item.id===nextProps.item.id)
