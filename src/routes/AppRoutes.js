import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
    HomeScreen,
    ChangeCourseScreen,
    IntroductionScreen,
    PracticeScreen,
    SyllabusScreen,
    BookmarkScreen,
    BooksScreen,
    CompilersScreen,
    TutorialsScreen,
    ProgramListScreen,
    InterviewScreen
} from '../screens'
import CustomDrawer from '../components/home/drawer'
import CustomHeader from '../components/home/header'
import PracticeDrawer from '../components/practice/drawer'
import PracticeHeader from '../components/practice/header'
import colors from "../resources/colors";

const Drawer = createDrawerNavigator()

const HomeNavigator = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerStyle={{ minWidth: 250 }}
            drawerContent={(props) => <CustomDrawer {...props} /> }
            screenOptions={{
                header: (props) => <CustomHeader {...props} />
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

const PracticeNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Practice"
            drawerStyle={{ minWidth: 250 }}
            drawerContent={(props) => <PracticeDrawer {...props} />}
            screenOptions={{
                header: (props) => <PracticeHeader {...props} />
            }}
        >
            <Drawer.Screen name="Practice" component={PracticeScreen} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

const AppStack = createStackNavigator()

const AppRoutes = () => {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="ChangeCourse" component={ChangeCourseScreen} options={{
                headerTitle: 'Change Course',
                headerTintColor: colors.white,
                headerStyle: {
                    backgroundColor: colors.colorPrimary,
                },
            }} />
            <AppStack.Screen name="Introduction" component={IntroductionScreen} />
            <AppStack.Screen name="Syllabus" component={SyllabusScreen} />
            <AppStack.Screen name="Bookmark" component={BookmarkScreen} />
            <AppStack.Screen name="Books" component={BooksScreen} />
            <AppStack.Screen name="Compilers" component={CompilersScreen} />
            <AppStack.Screen name="Tutorials" component={TutorialsScreen} />
            <AppStack.Screen name="ProgramList" component={ProgramListScreen} />
            <AppStack.Screen name="Practice" component={PracticeNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="Interview" component={InterviewScreen} />
        </AppStack.Navigator>
    )
}

export default AppRoutes
