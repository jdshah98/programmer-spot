import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import constants from '../../resources/constants'
import colors from '../../resources/colors'
import store from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SELECTED_PAGE_ID } from '../../actions'

const styles = StyleSheet.create({
    section_title: {
        backgroundColor: colors.orange,
        paddingVertical: 16,
        paddingHorizontal: 12,
        color: colors.white,
        fontSize: 16
    },
    page_title: {
        backgroundColor: colors.lightGray,
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey
    },
    active_page_title: {
        backgroundColor: colors.gray,
    },
})

const PracticeDrawer = ({ navigation }) => {
    console.log(navigation)
    const selectedCourse = store.getState().selectedCourse
    const pageId = useSelector(state => state.pageId)
    const dispatch = useDispatch()
    console.log(pageId)
    const [sections, setSections] = useState([])

    useEffect(() => {
        switch(selectedCourse.title) {
            case 'C': {
                setSections(constants.C_PRACTICE.sections)
                break
            }
            case 'C++': {
                setSections(constants.CPP_PRACTICE.sections)
                break
            }
            case 'Java': {
                setSections(constants.JAVA_PRACTICE.sections)
                break
            }
            case 'Python': {
                setSections(constants.PYTHON_PRACTICE.sections)
                break
            }
        }
    }, [selectedCourse])

    return (
        <ScrollView>
            <View>
                {
                    sections.map((section, i) => {
                        return (
                            <View key={i}>
                                <Text style={styles.section_title}>{selectedCourse.title} {section.title}</Text>
                                {
                                    section.pages.map(page => {
                                        let renderPage = (
                                            <TouchableOpacity
                                                key={page['key']}
                                                activeOpacity={0.9}
                                                style={pageId===page['key'] ? {...styles.page_title, ...styles.active_page_title} : styles.page_title}
                                                onPress={() => {
                                                    dispatch({
                                                        type: SET_SELECTED_PAGE_ID,
                                                        payload: {
                                                            pageId: page['key']
                                                        }
                                                    })
                                                    navigation.closeDrawer()
                                                }}
                                            >
                                                <Text style={pageId===page['key'] ? { color: colors.white } : { color: colors.black }}>{selectedCourse.title} - {page['name']}</Text>
                                            </TouchableOpacity>
                                        )
                                        return renderPage
                                    })
                                }
                            </View>                            
                        )      
                    })
                }
            </View>
        </ScrollView>
    )
}

export default PracticeDrawer
