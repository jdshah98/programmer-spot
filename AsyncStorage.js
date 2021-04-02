import AsyncStorage from '@react-native-community/async-storage'
import Constants from './Constants'

const setCourse = async(course) => {
    try {
        console.log("Course: ")
        console.log(JSON.stringify(course))
        await AsyncStorage.setItem(Constants.courseSelected, JSON.stringify(course))
    } catch(error) {
        console.log("Error: ")
        console.log(error)
    }
}

const getCourse = async() => {
    try {
        const course = await AsyncStorage.getItem(Constants.courseSelected)
        return JSON.parse(course)
    } catch(error) {
        console.log(error)
    }
    return null
}

const storage = {
    setCourse: setCourse,
    getCourse: getCourse
}

export default storage