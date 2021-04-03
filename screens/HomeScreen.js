import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
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
import Youtube from '../assets/images/youtube.png'
import Telegram from '../assets/images/telegram.png'
import Whatsapp from '../assets/images/whatsapp.png'
import styles from '../assets/styles'

const ModuleCard = (props) => {
    return (
        <View style={styles.topModuleCard}>
            <View style={styles.topModuleImageLayout}>
                <Image source={props.item.logo} style={styles.topModuleImage} />
            </View>
            <Text style={styles.topModuleText}>{props.item.title}</Text>
        </View>
    )
}

const LargeModuleCard = (props) => {
    return (
        <View key={props.item.id} style={styles.largeModuleCard}>
            <Image source={props.item.logo} style={styles.largeModuleImage} />
            <Text style={styles.largeModuleText}>{props.item.title}</Text>
        </View>
    )
}

const TechCard = (props) => {
    return (
        <View style={styles.techCard}>
            <Image source={props.item.logo} style={styles.techImage} />
            <Text style={styles.techText}>{props.item.title}</Text>            
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

    let tech_items = [
        {id: 1, title: 'Tech support', logo: Youtube},
        {id: 2, title: 'Telegram group', logo: Telegram},
        {id: 3, title: 'Whatsapp group', logo: Whatsapp}
    ]

    return (
        <ScrollView style={styles.homeBackground}>
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
                                row.map(item => <LargeModuleCard item={item} />)
                            }
                        </View>
                    )
                })
            }
            </View>
            <View style={styles.techList}>
                <TechCard item={tech_items[0]} />
                <View style={styles.verticalSeprator} />
                <TechCard item={tech_items[1]} />
                <View style={styles.verticalSeprator} />
                <TechCard item={tech_items[2]} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen