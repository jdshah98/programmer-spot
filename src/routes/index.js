import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { Provider } from 'react-redux'
import store from '../store'

const AppRoute = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default AppRoute
