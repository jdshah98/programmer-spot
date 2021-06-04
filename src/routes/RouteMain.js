import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeComponent from '../components/HomeComponent'
import ChangeCourseComponent from '../components/ChangeCourseComponent'
import CustomDrawer from '../components/home/drawer'
import CustomHeader from '../components/home/header'
import IntroductionComponent from '../components/modules/IntroductionComponent'
import Colors from "../assets/colors";

const AppStack = createStackNavigator()

const Drawer = createDrawerNavigator()

const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerStyle={{ minWidth: 250 }}
            drawerContent={(props) => <CustomDrawer {...props} /> }
            screenOptions={{
                header: (props) => <CustomHeader {...props} />
            }}
        >
            <Drawer.Screen name="Home" component={HomeComponent} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

export default function RouteMain() {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="ChangeCourse" component={ChangeCourseComponent} options={{
                headerShown: true,
                headerTitle: 'Change Course',
                headerTintColor: Colors.white,
                headerStyle: {
                    backgroundColor: Colors.colorPrimary,
                },
            }} />
            <AppStack.Screen name="Introduction" component={IntroductionComponent} />
        </AppStack.Navigator>
    )
}