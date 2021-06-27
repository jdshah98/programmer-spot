import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import C_Practice from './Practice/C_Practice'
import CPP_Practice from './Practice/CPP_Practice'
import Java_Practice from './Practice/Java_Practice'
import Python_Practice from './Practice/Python_Practice'
import PreNextButton from '../components/practice/PreNextButton'

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 40
    },
    body: {
        padding: 16
    }
})

const PracticeComponent = () => {
    const selectedCourse = useSelector(state => state.selectedCourse)
    const pageId = useSelector(state => state.pageId)

    const renderPage = () => {
        switch(selectedCourse.title) {
            case 'C': return <C_Practice pageId={pageId} />
            case 'C++': return <CPP_Practice pageId={pageId} />
            case 'Java': return <Java_Practice pageId={pageId} />
            case 'Python': return <Python_Practice pageId={pageId} />
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    pageId>0 && <PreNextButton pageId={pageId} />
                }
                <View style={styles.body}>
                    {renderPage()}
                </View>
                <PreNextButton pageId={pageId} />
            </View>
        </ScrollView>
    )
}

export default PracticeComponent
