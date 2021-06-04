import React from 'react'
import {StyleSheet, View, Text} from "react-native";
import Colors from "../../assets/colors";

const styles = StyleSheet.create({
    container: {
        marginVertical: 16
    },
    subHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8
    },
    code: {
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: Colors.lightGray,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 0
    },
    justified: {
        textAlign: 'justify'
    },
    lineMargin: {
        marginBottom: 8
    }
})

const Section = (
    {
        header= null,
        lines= [],
        code= null,
        output= null,
        description= null
    }
) => {
    return (
        <View style={styles.container}>
            {
                header !== null && <Text style={{...styles.subHeader, ...styles.lineMargin}}>{header}</Text>
            }
            {
                lines.map((line, i) => <Text key={i} style={{...styles.justified, ...styles.lineMargin}}>{line}</Text>)
            }
            {
                code !== null && <Text style={{...styles.code, ...styles.lineMargin}}>{code}</Text>
            }
            {
                output !== null && [
                    <Text key={1} style={{...styles.subHeader, ...styles.lineMargin}}>Output</Text>,
                    <Text key={2} style={styles.lineMargin}>{output}</Text>
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
