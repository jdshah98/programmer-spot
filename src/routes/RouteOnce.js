import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCourseComponent from '../components/SelectCourseComponent';
import Colors from '../assets/colors';

const AppStack = createStackNavigator();

export default function RouteOnce() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="SelectCourseScreen"
                component={SelectCourseComponent}
                options={{
                    headerShown: true,
                    headerTitle: 'Select Course',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.colorPrimary,
                    },
                }}
            />
        </AppStack.Navigator>
    );
}
