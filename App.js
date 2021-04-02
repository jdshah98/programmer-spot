import React, { useEffect, useRef, useState } from 'react'
import { SplashScreen, CourseScreen, HomeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SharedStorage from './AsyncStorage'
import { LogBox } from 'react-native';
import DrawerHeader from './components/DrawerHeader'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

LogBox.ignoreLogs([
    'Warning: isMounted(...) is deprecated'
])

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}

const App = () => {
    const isMountedVal = useRef(1)
    const [isSplash, setSplash] = useState(true)
    const [courseSelected, setCourseSelected] = useState(null)

    const splashTimeout = () => {
        if(isMountedVal.current) {
            setSplash(false)
        }
    }

    useEffect(() => {
        if (!courseSelected) {
            SharedStorage.getCourse().then(selectedCourse => {
                if(isMountedVal.current) {
                    setCourseSelected(selectedCourse)
                }
            })
        }
        setTimeout(splashTimeout, 3000)

        return () => {
            isMountedVal.current = 0
            clearTimeout(splashTimeout)
        };
    }, [])

    if(isSplash) {
        return <SplashScreen />
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={courseSelected!=null?"HomeScreen":"SelectCourse"}>
                <Stack.Screen name="SelectCourse" component={CourseScreen} options={({route})=>({headerTitle: "Select Course"})} />
                <Stack.Screen name="HomeScreen" component={AppNavigator}  options={({route}) => ({header: () => <DrawerHeader title="Home" subtitle={courseSelected.title + " Programming"} />})} />
                <Stack.Screen name="ChangeCourse" component={CourseScreen} options={({route}) => ({headerTitle: "Change Course"})} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;