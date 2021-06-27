import React from 'react'
import { Text } from 'react-native'
import constants from '../../resources/constants'

const Java_Practice = ({ pageId }) => {
    const sections = constants.JAVA_PRACTICE.sections

    return sections.map(section => {
        return section.pages.map((page, i) => {
            if(page.key===pageId){
                return <Text key={i}>{page.name}</Text>
            }
        })
    })
}

export default Java_Practice
