import c_logo from './assets/images/c_language.jpg'
import cpp_logo from './assets/images/cpp_language.jpg'
import java_logo from './assets/images/java_language.jpg'
import python_logo from './assets/images/python_language.jpg'
import Course from './Course'

const courses = [
    new Course(1, "C", c_logo),
    new Course(2, "C++", cpp_logo),
    new Course(3, "Java", java_logo),
    new Course(4, "Python", python_logo)
]

const getCourseById = (id) => {
    return courses.filter((course) => course.id==id)
}

const getAllCourses = () => {
    return courses
}

const db = {
    getCourseById: getCourseById,
    getAllCourses: getAllCourses
}

export default db