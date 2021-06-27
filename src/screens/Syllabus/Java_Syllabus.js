import React from 'react'
import { View, Text } from 'react-native'
import constants from '../../resources/constants'

const Java_Syllabus = () => {
    return (
        <View>
            <Text>{constants.JAVA_SYLLABUS.heading}</Text>
            {
                constants.JAVA_SYLLABUS.values.map((syllabus, i) => {
                    return (
                        <View key={i}>
                            <Text>{syllabus.topic}</Text>
                            {
                                syllabus.sub_topics.map((sub_topic, j) => {
                                    return <Text key={j}>{sub_topic}</Text>
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Java_Syllabus
