import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import { Link } from '@react-navigation/native'
import SharedStorage from '../AsyncStorage'
import Introduction from '../assets/images/introduction.png'
import Syllabus from '../assets/images/syllabus.png'
import Bookmark from '../assets/images/bookmark.png'
import Books from '../assets/images/books.png'
import Compilers from '../assets/images/compilers.png'
import Tutorials from '../assets/images/tutorials.png'
import BasicPrograms from '../assets/images/basic_programs.png'
import Practice from '../assets/images/practice.png'
import Interview from '../assets/images/interview.png'
import ProgrammingBooks from '../assets/images/programming_books.png'
import CodeCompiler from '../assets/images/code_compiler.png'
import Video from '../assets/images/video.png'
import styles from '../assets/styles'

const ModuleCard = (props) => {
    return (
        <View style={props.isLarge ? styles.largeModuleCard : styles.topModuleCard}>
            {
                props.isLarge ? (
                    <Image source={props.item.logo} style={styles.largeModuleImage} />
                ) : (
                    <View style={styles.topModuleImageLayout}>
                        <Image source={props.item.logo} style={styles.topModuleImage} />
                    </View>
                )
            }
            <Text style={props.isLarge? styles.largeModuleText : styles.topModuleText}>{props.item.title}</Text>
        </View>
    )
}

const HomeScreen = () => {
    const isMountedVal = useRef(1)
    const [selectedCourse, setSelectedCourse] = useState(null)

    useEffect(() => {
        SharedStorage.getCourse().then(course => {
            if(isMountedVal.current) {
                setSelectedCourse(course)
            }
        }).catch(error => {
            console.log(error)
        })

        return () => {
            isMountedVal.current = 0
        }
    }, [])

    useEffect(() => {
        console.log("Rendering Home Screen")
    })

    let items = [
        {id: 1, title: 'Introduction', logo: Introduction},
        {id: 2, title: 'Syllabus', logo: Syllabus},
        {id: 3, title: 'Bookmark', logo: Bookmark},
        {id: 4, title: 'Books', logo: Books},
        {id: 5, title: 'Compilers', logo: Compilers},
        {id: 6, title: 'Tutorials', logo: Tutorials}
    ]

    let modules = [
        [
            {id: 1, title: 'Basic\nPrograms', logo: BasicPrograms},
            {id: 2, title: 'Practice\nProgramming', logo: Practice},
            {id: 3, title: 'Interview\nQuestions', logo: Interview}
        ],
        [
            {id: 4, title: 'Programming\nBooks', logo: ProgrammingBooks},
            {id: 5, title: 'Code\nCompilers', logo: CodeCompiler},
            {id: 6, title: 'Video\nTutorials', logo: Video}
        ]
    ]

    return (
        <ScrollView>
            <FlatList
                style={styles.topModuleList}
                horizontal={true}
                data={items}
                renderItem={({item}) => <ModuleCard item={item} />}
            />
            <Text style={styles.moduleListSeperatorText}>Start Learning</Text>
            <View style={styles.largeModuleList}>
            {
                modules.map(row => {
                    return (
                        <View style={styles.moduleRow}>
                            {
                                row.map(item => <ModuleCard item={item} isLarge={true} />)
                            }
                        </View>
                    )
                })
            }
            </View>
        </ScrollView>
    )
}

export default HomeScreen