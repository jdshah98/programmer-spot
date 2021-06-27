import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../resources/colors'
import constants from '../../resources/constants'
import arrays from '../../resources/arrays'
import MyUlist from '../../components/custom/MyUlist'
import MyCode from '../../components/custom/MyCode'
import python_programs from '../../resources/programs/python_programs'

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

const Python_Intro = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.para}>{constants.PYTHON_INTRO.MAIN_PARA}</Text>

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_1}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_1_1}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_1_2}</Text>
            <MyUlist items={arrays.PYTHON_INTRO.SUB_LIST_1} />

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_2}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_2}</Text>
            <MyUlist items={arrays.PYTHON_INTRO.SUB_LIST_2} />

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_3}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_3}</Text>
            <MyCode code={python_programs.hello_world} />

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_4}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_4}</Text>
            <MyUlist items={arrays.PYTHON_INTRO.SUB_LIST_4} />

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_5}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_5}</Text>

            <Text style={styles.sub_heading}>{constants.PYTHON_INTRO.SUB_HEADING_6}</Text>
            <Text style={styles.para}>{constants.PYTHON_INTRO.SUB_PARA_6}</Text>
        </View>
    )
}

export default Python_Intro
