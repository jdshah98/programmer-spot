import React from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import C_Syllabus from './Syllabus/C_Syllabus'
import Cpp_Syllabus from './Syllabus/Cpp_Syllabus'
import Java_Syllabus from './Syllabus/Java_Syllabus'
import Python_Syllabus from './Syllabus/Python_Syllabus'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const SyllabusScreen = () => {
    const selectedCourse = useSelector(state => state.selectedCourse)
    console.log(selectedCourse)

    const renderView = () => {
        switch(selectedCourse.title) {
            case 'C': return <C_Syllabus />
            case 'C++': return <Cpp_Syllabus />
            case 'Java': return <Java_Syllabus />
            case 'Python': return <Python_Syllabus />
            default: return <Text style={styles.centered}>Page Not Found</Text>
        }
    }

    return (
        <ScrollView>
            {renderView()}
        </ScrollView>
    )
}

export default SyllabusScreen
