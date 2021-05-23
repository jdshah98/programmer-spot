import React, { useEffect, useCallback, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RouteOnce from './RouteOnce'
import RouteMain from './RouteMain'
import { useSelector } from 'react-redux'

export default function RouteApp(props) {
    const isCourseSelected = useSelector(state => state.selectedCourse!==null)

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            SplashScreen.hide()
            // console.log("Splash Screen Hidden")
            // console.log(props)
        }, 1000);

        return () => clearTimeout(splashTimeout)
    }, [])

    const renderRoute = useCallback(
        () => {
            if(!isCourseSelected) {
                return <RouteOnce />
            }
            return <RouteMain />
        },
        [isCourseSelected],
    )
    
    return (
        <>
            {renderRoute()}
        </>
    )
}