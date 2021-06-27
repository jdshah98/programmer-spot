import React, { useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import CourseCard from '../components/cards/CourseCard'
import {
    c_language_logo as c_logo,
    cpp_language_logo as cpp_logo,
    java_language_logo as java_logo,
    python_language_logo as python_logo
} from '../resources/images'
import { useDispatch } from 'react-redux'
import colors from '../resources/colors'
import { SET_COURSE_SELECTED, SET_LAST_PAGE_ID } from '../actions'
import constants from '../resources/constants'

function getCount(sections) {
    let count = 0
    sections.forEach(section => {
        count += section.pages.length
    })
    return count
}

const styles = StyleSheet.create({
    course_list: {
        margin: 12
    },
    seperator: {
        width: '100%',
        height: 8,
        backgroundColor: colors.transparent
    },
    continue_btn: {
        width: 150,
        height: 50,
        backgroundColor: colors.colorPrimary,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        alignSelf: "center",
        marginBottom: 16
    },
    continue_btn_text: {
        color: colors.white,
        fontSize: 16
    },
})

const SelectCourseScreen = (props) => {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState(null)

    const items = [
        {
            key: 1,
            title: "C",
            logo: c_logo
        },
        {
            key: 2,
            title: "C++",
            logo: cpp_logo
        },
        {
            key: 3,
            title: "Java",
            logo: java_logo
        },
        {
            key: 4,
            title: "Python",
            logo: python_logo
        },
    ]

    return (
        <>
            <View style={{ backgroundColor: colors.white, paddingHorizontal: 16, paddingVertical: 4 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Select Course &amp; Press Continue</Text>
                <Text>You can change it at any time</Text>
            </View>
            <FlatList
                style={styles.course_list}
                data={items}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                renderItem={({ item }) => <CourseCard item={item} isSelected={selectedItem != null ? item.key == selectedItem.key : false} setSelected={setSelectedItem} />}
            />
            <TouchableOpacity activeOpacity={0.85} style={styles.continue_btn} onPress={() => {
                if(selectedItem!=null) {
                    dispatch({
                        type: SET_COURSE_SELECTED,
                        payload: {
                            selectedCourse: selectedItem
                        }
                    })
                    switch(selectedItem.title) {
                        case 'C': {
                            dispatch({
                                type: SET_LAST_PAGE_ID,
                                payload: {
                                    lastPageId: getCount(constants.C_PRACTICE.sections)
                                }
                            })
                            break
                        }
                        case 'C++': {
                            dispatch({
                                type: SET_LAST_PAGE_ID,
                                payload: {
                                    lastPageId: getCount(constants.CPP_PRACTICE.sections)
                                }
                            })
                            break
                        }
                        case 'Java': {
                            dispatch({
                                type: SET_LAST_PAGE_ID,
                                payload: {
                                    lastPageId: getCount(constants.JAVA_PRACTICE.sections)
                                }
                            })
                            break
                        }
                        case 'Python': {
                            dispatch({
                                type: SET_LAST_PAGE_ID,
                                payload: {
                                    lastPageId: getCount(constants.PYTHON_PRACTICE.sections)
                                }
                            })
                            break
                        }
                    }
                } else {
                    Alert.alert("Please select any one course")
                }
            }}>
                <Text style={styles.continue_btn_text}>Continue</Text>
            </TouchableOpacity>
        </>
    )
}

export default SelectCourseScreen