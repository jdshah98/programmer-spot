import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SelectCourseScreen } from '../screens';
import colors from '../resources/colors';

const AppStack = createStackNavigator();

const FirstRun = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="SelectCourseScreen"
                component={SelectCourseScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Select Course',
                    headerTintColor: colors.white,
                    headerStyle: {
                        backgroundColor: colors.colorPrimary,
                    },
                }}
            />
        </AppStack.Navigator>
    );
}

export default FirstRun