import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../resources/colors'
import constants from '../../resources/constants'
import arrays from '../../resources/arrays'
import MyUlist from '../../components/custom/MyUlist'
import MyCode from '../../components/custom/MyCode'
import java_programs from '../../resources/programs/java_programs'

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    para: {
        textAlign: 'justify',
        fontSize: 16
    },
    sub_heading: {
        fontSize: 22,
        color: colors.gray,
        textAlign: 'center'
    }
})

const Java_Intro = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.para}>{constants.JAVA_INTRO.MAIN_PARA}</Text>

            <Text style={styles.sub_heading}>{constants.JAVA_INTRO.SUB_HEADING_1}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_1}</Text>
            <MyUlist items={arrays.JAVA_INTRO.SUB_LIST_1} />
            
            <Text style={styles.sub_heading}>{constants.JAVA_INTRO.SUB_HEADING_2}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_2}</Text>
            <MyCode code={java_programs.hello_world} />

            <Text style={styles.sub_heading}>{constants.JAVA_INTRO.SUB_HEADING_3}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_3_1}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_3_2}</Text>
            <MyUlist items={arrays.JAVA_INTRO.SUB_LIST_3} />

            <Text style={styles.sub_heading}>{constants.JAVA_INTRO.SUB_HEADING_4}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_4}</Text>

            <Text style={styles.sub_heading}>{constants.JAVA_INTRO.SUB_HEADING_5}</Text>
            <Text style={styles.para}>{constants.JAVA_INTRO.SUB_PARA_5}</Text>
        </View>
    )
}

export default Java_Intro
