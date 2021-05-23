import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import CourseCard from './cards/CourseCard'
import {
    c_language_logo as c_logo,
    cpp_language_logo as cpp_logo,
    java_language_logo as java_logo,
    python_language_logo as python_logo
} from '../assets/images'
import store from '../store'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../assets/colors'
import { SET_COURSE_SELECTED } from '../actions'

const styles = StyleSheet.create({
    courseList: {
        margin: 12
    },
    seperator: {
        width: '100%',
        height: 8,
        backgroundColor: Colors.transparent
    },
    continueBtn: {
        width: 150,
        height: 50,
        backgroundColor: Colors.colorPrimary,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        alignSelf: "center",
        marginBottom: 16
    },
    continueBtnText: {
        color: Colors.white,
        fontSize: 16
    },
})

const ChangeCourseComponent = (props) => {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState(store.getState().selectedCourse)

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
            <FlatList
                style={styles.courseList}
                data={items}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                renderItem={({ item }) => <CourseCard item={item} isSelected={selectedItem != null ? item.key == selectedItem.key : false} setSelected={setSelectedItem} />}
            />
            <TouchableOpacity activeOpacity={0.85} style={styles.continueBtn} onPress={() => {
                if(selectedItem!=null) {
                    console.log("dispatching Change Course")
                    dispatch({
                        type: SET_COURSE_SELECTED, 
                        payload: {
                            selectedCourse: selectedItem
                        }
                    })
                    props.navigation.goBack()
                } else {
                    Alert.alert("Please select any one course")
                }
            }}>
                <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>
        </>
    )
}

export default ChangeCourseComponent