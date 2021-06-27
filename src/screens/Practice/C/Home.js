import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import constants from '../../../resources/constants'
import MyUlist from '../../../components/custom/MyUlist'
import MyCode from '../../../components/custom/MyCode'
import arrays from '../../../resources/arrays'
import colors from '../../../resources/colors'
import { hello_world } from '../../../resources/programs/c_programs'

const styles = StyleSheet.create({
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

const Home = () => {
    return (
        <View>
            <Text style={{...styles.para, marginBottom: 16}}>{constants.C_INTRO.MAIN_PARA}</Text>

            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_1}</Text>
            <Text style={{...styles.para, marginBottom: 8}}>{constants.C_INTRO.SUB_PARA_1}</Text>
            <MyUlist style={{ marginBottom: 16 }} items={arrays.C_INTRO.SUB_LIST_1} />

            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_2}</Text>
            <MyUlist style={{ marginBottom: 16 }} items={arrays.C_INTRO.SUB_LIST_2} />

            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_3}</Text>
            <Text style={{...styles.para, marginBottom: 8}}>{constants.C_INTRO.SUB_PARA_3}</Text>
            <MyCode style={{ marginBottom: 16 }} code={hello_world.program} />

            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_4}</Text>
            <Text style={{...styles.para, marginBottom: 8}}>{constants.C_INTRO.SUB_PARA_4}</Text>
            <MyUlist style={{ marginBottom: 16 }} items={arrays.C_INTRO.SUB_LIST_4} />
            
            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_5}</Text>
            <Text style={{...styles.para, marginBottom: 16}}>{constants.C_INTRO.SUB_PARA_5}</Text>

            <Text style={{...styles.sub_heading, marginBottom: 8}}>{constants.C_INTRO.SUB_HEADING_6}</Text>
            <Text style={{...styles.para, marginBottom: 16}}>{constants.C_INTRO.SUB_PARA_6}</Text>
        </View>
    )
}

export default Home
