import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RouteApp from './RouteApp'
import { Provider } from 'react-redux'
import store from '../store'

export default function RouteRoot() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RouteApp />
            </NavigationContainer>
        </Provider>
    )
}