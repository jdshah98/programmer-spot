import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import colors from '../../resources/colors'

const styles = StyleSheet.create({
    scroll_view: {
        paddingStart: 8,
        paddingEnd: 8,
        paddingVertical: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: colors.lightGray,
        marginVertical: 8
    },
    code: {
        fontSize: 15
    },
    vertical_line: {
        borderLeftWidth: 4,
        borderLeftColor: colors.colorPrimary
    }
})

const MyCode = ({ code, style }) => {
    return (
        code!==undefined &&
        <View style={{...styles.container, ...style}}>
            <View style={styles.vertical_line}></View>
            <ScrollView horizontal={true}>
                <View style={styles.scroll_view}>
                    {
                        code.map((line, i) => {
                            return <Text key={i} style={styles.code}>{line}</Text>
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default MyCode
