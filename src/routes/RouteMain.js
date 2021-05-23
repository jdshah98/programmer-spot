import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeComponent from '../components/HomeComponent'
import ChangeCourseComponent from '../components/ChangeCourseComponent'
import CustomDrawer from '../components/drawer'

const AppStack = createStackNavigator()

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home" 
            drawerStyle={{ width: 250 }}
            drawerContent={(props) => <CustomDrawer {...props} /> }
        >
            <Drawer.Screen name="Home" component={HomeComponent} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

export default function RouteMain() {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="ChangeCourse" component={ChangeCourseComponent} />
        </AppStack.Navigator>
    )
}