import React from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import C_Intro from './Introduction/C_Intro'
import Cpp_Intro from './Introduction/Cpp_Intro'
import Java_Intro from './Introduction/Java_Intro'
import Python_Intro from './Introduction/Python_Intro'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const IntroductionScreen = () => {
    const selectedCourse = useSelector(state => state.selectedCourse)

    const renderView = () => {
        switch(selectedCourse.title) {
            case 'C': return <C_Intro />
            case 'C++': return <Cpp_Intro />
            case 'Java': return <Java_Intro />
            case 'Python': return <Python_Intro />
            default: return <Text style={styles.centered}>Page Not Found</Text>
        }
    }

    return (
        <ScrollView>
            {renderView()}
        </ScrollView>
    )
}

export default IntroductionScreen
