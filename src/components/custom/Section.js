import React from 'react'
import {StyleSheet, View, Text} from "react-native";
import colors from "../../resources/colors";

const styles = StyleSheet.create({
    container: {
        marginVertical: 16
    },
    sub_header: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8
    },
    code: {
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: colors.lightGray,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 0
    },
    justified: {
        textAlign: 'justify'
    },
    line_margin: {
        marginBottom: 8
    }
})

const Section = (
    {
        header= null,
        lines= [],
        code= null,
        output= null,
        description= null,
        custom_styles=[]
    }
) => {
    const containerStyle = Object.assign({}, styles.container)
    custom_styles.forEach(s => {
        for(var k in s) {
            containerStyle[k] = s[k]
        }
    })
    return (
        <View style={containerStyle}>
            {
                header !== null && <Text style={{...styles.sub_header, ...styles.line_margin}}>{header}</Text>
            }
            {
                lines.map((line, i) => <Text key={i} style={{...styles.justified, ...styles.line_margin}}>{line}</Text>)
            }
            {
                code !== null && <Text style={{...styles.code, ...styles.line_margin}}>{code}</Text>
            }
            {
                output !== null && [
                    <Text key={1} style={{...styles.sub_header, ...styles.line_margin}}>Output</Text>,
                    <Text key={2} style={styles.line_margin}>{output}</Text>
                ]
            }
            {
                description !== null && (
                    <Text style={styles.justified}>{description}</Text>
                )
            }
        </View>
    );
}

export default Section;
