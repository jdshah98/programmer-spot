import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import CIntro from '../pages/c/Intro'
import CppIntro from '../pages/cpp/Intro'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const IntroductionComponent = () => {
    const selectedCourse = useSelector(state => state.selectedCourse)
    console.log(selectedCourse)

    const renderView = () => {
        switch(selectedCourse.title) {
            case 'C': return <CIntro />
            case 'C++': return <CppIntro />
            default: return <Text>Page Not Found</Text>
        }
    }

    return (
        <ScrollView>
            {renderView()}
        </ScrollView>
    )
}

export default IntroductionComponent
