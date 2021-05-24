import React, { useState } from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import styles from '../assets/styles'
import {
    introduction_logo as Introduction,
    syllabus_logo as Syllabus,
    bookmark_logo as Bookmark,
    books_logo as Books,
    compilers_logo as Compilers,
    tutorials_logo as Tutorials,
    basic_programs_logo as BasicPrograms,
    practice_logo as Practice,
    interview_logo as Interview,
    programming_books_logo as ProgrammingBooks,
    code_compiler_logo as CodeCompiler,
    video_logo as Video,
    youtube_logo as Youtube,
    telegram_logo as Telegram,
    whatsapp_logo as Whatsapp
} from "../assets/images"
import NavModuleCard from './cards/NavModuleCard'
import ModuleCard from './cards/ModuleCard'
import TechCard from './cards/TechCard'
import { useSelector } from 'react-redux'

const ModuleView = React.memo(({ modules }) => {
    return (
        <View style={styles.largeModuleList}>
        {
            modules.map((row,i) => {
                console.log("Rendering Modules")
                return (
                    <View key={i} style={styles.moduleRow}>
                        {
                            row.map(item => <ModuleCard key={item.id} item={item} />)
                        }
                    </View>
                )
            })
        }
        </View>
    )
})

const HomeScreen = () => {
    const items = [
        {id: 1, title: 'Introduction', logo: Introduction},
        {id: 2, title: 'Syllabus', logo: Syllabus},
        {id: 3, title: 'Bookmark', logo: Bookmark},
        {id: 4, title: 'Books', logo: Books},
        {id: 5, title: 'Compilers', logo: Compilers},
        {id: 6, title: 'Tutorials', logo: Tutorials}
    ]

    const modules = [
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

    const tech_items = [
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
                renderItem={({item}) => <NavModuleCard item={item} />}
            />
            <Text style={styles.moduleListSeperatorText}>Start Learning</Text>
            <ModuleView modules={modules} />
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
