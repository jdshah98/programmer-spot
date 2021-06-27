import React, { useEffect, useCallback } from 'react'
import SplashScreen from 'react-native-splash-screen'
import FirstRun from './FirstRun'
import AppRoutes from './AppRoutes'
import { useSelector } from 'react-redux'

const AppNavigator = (props) => {
    const isCourseSelected = useSelector(state => state.selectedCourse!==null)

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            SplashScreen.hide()
        }, 1000);

        return () => clearTimeout(splashTimeout)
    }, [])

    const renderRoute = useCallback(
        () => {
            if(!isCourseSelected) {
                return <FirstRun />
            }
            return <AppRoutes />
        },
        [isCourseSelected],
    )
    
    return (
        <>
            {renderRoute()}
        </>
    )
}

export default AppNavigator
