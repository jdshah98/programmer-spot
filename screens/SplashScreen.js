import React, { useState } from 'react'
import {View, Text, Image} from 'react-native'
import styles from '../assets/styles'

import SplashLogo from '../assets/images/logo.png'

const SplashScreen = () => {
    return (
        <View style={styles.splashContainer}>
            <Image source={SplashLogo} style={styles.splashLogo} />
            <Text style={{
                marginVertical: 16
            }}>Developed By</Text>
            <Text style={{
                marginBottom: 16,
                fontSize: 20
            }}>Jainam Shah</Text>
        </View>
    )
}

export default SplashScreen
