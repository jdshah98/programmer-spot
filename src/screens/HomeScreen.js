import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
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
} from "../resources/images"
import NavModuleCard from '../components/cards/NavModuleCard'
import ModuleCard from '../components/cards/ModuleCard'
import TechCard from '../components/cards/TechCard'
import colors from '../resources/colors'

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.lightPurple
    },
    scrolling_nav: {
        backgroundColor: colors.colorPrimary,
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom: 8
    },
    module_heading: {
        backgroundColor: colors.white,
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 4
    },
    module_list: {
        backgroundColor: colors.white,
        padding: 8,
        marginBottom: 16
    },
    module_row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 8
    },
    tech_list: {
        backgroundColor: colors.white,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    vertical_seperator: {
        backgroundColor: colors.gray,
        width: 2
    }
})

const ModuleView = ({ modules, navigation }) => {
    return (
        <View style={styles.module_list}>
        {
            modules.map((row,i) => {
                console.log("Rendering Modules")
                return (
                    <View key={i} style={styles.module_row}>
                        {
                            row.map(item => <ModuleCard key={item.id} item={item} navigation={navigation} />)
                        }
                    </View>
                )
            })
        }
        </View>
    )
}

const TechView = ({ items }) => {
    return (
        <View style={styles.tech_list}>
            <TechCard item={items[0]} />
            <View style={styles.vertical_seperator} />
            <TechCard item={items[1]} />
            <View style={styles.vertical_seperator} />
            <TechCard item={items[2]} />
        </View>
    )
}

const HomeScreen = (props) => {
    const items = [
        {id: 1, title: 'Introduction', logo: Introduction, navigateTo: 'Introduction'},
        {id: 2, title: 'Syllabus', logo: Syllabus, navigateTo: 'Syllabus'},
        {id: 3, title: 'Bookmark', logo: Bookmark, navigateTo: 'Bookmark'},
        {id: 4, title: 'Books', logo: Books, navigateTo: 'Books'},
        {id: 5, title: 'Compilers', logo: Compilers, navigateTo: 'Compilers'},
        {id: 6, title: 'Tutorials', logo: Tutorials, navigateTo: 'Tutorials'}
    ]

    const modules = [
        [
            {id: 1, title: 'Basic\nPrograms', logo: BasicPrograms, navigateTo: 'ProgramList'},
            {id: 2, title: 'Practice\nProgramming', logo: Practice, navigateTo: 'Practice'},
            {id: 3, title: 'Interview\nQuestions', logo: Interview, navigateTo: 'Interview'}
        ],
        [
            {id: 4, title: 'Programming\nBooks', logo: ProgrammingBooks, navigateTo: 'Books'},
            {id: 5, title: 'Code\nCompilers', logo: CodeCompiler, navigateTo: 'Compilers'},
            {id: 6, title: 'Video\nTutorials', logo: Video, navigateTo: 'Tutorials'}
        ]
    ]

    const tech_items = [
        {id: 1, title: 'Tech support', logo: Youtube},
        {id: 2, title: 'Telegram group', logo: Telegram},
        {id: 3, title: 'Whatsapp group', logo: Whatsapp}
    ]

    return (
        <ScrollView style={styles.background}>
            <FlatList
                style={styles.scrolling_nav}
                horizontal={true}
                data={items}
                renderItem={({item}) => <NavModuleCard item={item} navigation={props.navigation} />}
            />
            <Text style={styles.module_heading}>Start Learning</Text>
            <ModuleView modules={modules} navigation={props.navigation} />
            <TechView items={tech_items} />
        </ScrollView>
    )
}

export default HomeScreen
