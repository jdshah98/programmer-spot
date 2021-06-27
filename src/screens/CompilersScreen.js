import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const CompilersScreen = () => {
    return (
        <View style={styles.centered}>
            <Text>Coming Soon...</Text>
        </View>
    )
}

export default CompilersScreen
