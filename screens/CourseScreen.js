import React, { useEffect, useRef, useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../assets/styles'
import c_logo from '../assets/images/c_language.jpg'
import cpp_logo from '../assets/images/cpp_language.jpg'
import java_logo from '../assets/images/java_language.jpg'
import python_logo from '../assets/images/python_language.jpg'
import Icon from 'react-native-vector-icons/Feather'
import SharedStorage from '../AsyncStorage'
import db from '../local_database'

const CourseCard = (props) => {
    console.log(props)
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.courseCard} onPress={() => {
                props.setSelected(props.item)
                SharedStorage.setCourse(props.item)
            }}>
                <Image source={props.item.logo} style={styles.courseImage} />
                <Text style={styles.courseTitle}>{props.item.title} Programming</Text>
                <Icon name={props.isSelected ? "check-circle" : "circle"} size={24} />
            </TouchableOpacity>
        </View>
    )
}

const CourseScreen = (props) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const isMountedVal = useRef(1)

    useEffect(() => {
        isMountedVal.current = 1

        SharedStorage.getCourse().then(selectedCourse => {
            console.log("Selected Course: ")
            console.log(selectedCourse)
            updateState(() => setSelectedItem(selectedCourse))
        })

        return () => {isMountedVal.current = 0};
    }, [])

    const updateState = (callback) => {
        if(isMountedVal.current) {
            console.log("hello")
            callback()
        }
    }

    let items = db.getAllCourses()

    return (
        <>
            <FlatList
                style={styles.courseList}
                data={items}
                ItemSeparatorComponent={() => <View style={styles.courseSeperator} />}
                renderItem={({ item }) => <CourseCard item={item} isSelected={selectedItem != null ? item.id == selectedItem.id : false} setSelected={setSelectedItem} />}
            />
            <TouchableOpacity activeOpacity={0.85} style={styles.courseContinueButton} onPress={() => {
                if(selectedItem!=null) {
                    if(props.navigation.canGoBack()) {
                        props.navigation.goBack()
                    }else{
                        props.navigation.replace("HomeScreen")
                    }
                } else {
                    Alert.alert("Please select any one course")
                }
            }}>
                <Text style={styles.courseContinueButtonText}>Continue</Text>
            </TouchableOpacity>
        </>
    )
}

export default CourseScreen