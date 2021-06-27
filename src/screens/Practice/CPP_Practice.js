import React from 'react'
import { Text } from 'react-native'
import constants from '../../resources/constants'

const Cpp_Practice = ({ pageId }) => {
    const sections = constants.CPP_PRACTICE.sections

    return sections.map(section => {
        return section.pages.map((page, i) => {
            if(page.key===pageId){
                return <Text key={i}>{page.name}</Text>
            }
        })
    })
}

export default Cpp_Practice
