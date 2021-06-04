import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Colors from "../../../assets/colors";
import Constants from "./Constants";
import {Rows, Table} from "react-native-table-component";

const styles = StyleSheet.create({
    mainHeader: {
        backgroundColor: Colors.tomato,
        textAlign: 'center',
        padding: 24,
        color: Colors.white,
        fontSize: 24,
    },
    container: {
        padding: 8,
        marginBottom: 16
    },
    justified: {
        textAlign: 'justify'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: Colors.blue,
        textAlign: 'center'
    },
    lineMargin: {
        marginBottom: 8
    },
    bold: {
        fontWeight: 'bold'
    }
})

const IntroPage = () => {
    const renderListItem = (item, i, type) => {
        if(type==="ol") {
            if(typeof item === "object") {
                return <Text key={i} style={{textAlign: 'justify', ...styles.lineMargin}}>{`${i+1}.  `}<Text style={styles.bold}>{item.title}</Text> - {item.subject}</Text>
            }
            return <Text key={i} style={{textAlign: 'justify', ...styles.lineMargin}}>{`${i+1}.  ${item}`}</Text>
        }
        if(typeof item === "object") {
            return (
                <View key={i} style={styles.lineMargin}>
                    <Text style={styles.bold}>{`\u2022 ${item.title}`}</Text>
                    <Text style={{...styles.justified, marginStart: 8}}>{item.subject}</Text>
                </View>
            )
            return <Text key={i} style={{textAlign: 'justify'}}>{`\u2022 `}<Text style={styles.bold}>{item.title}</Text> - {item.subject}</Text>
        }
        return <Text key={i} style={{textAlign: 'justify'}}>{`\u2022 ${item}`}</Text>
    }

    return (
        <View style={{ padding: 8 }}>
            <Text style={styles.mainHeader}>CPP Programming Introduction</Text>
            <View style={styles.container}>
                <Text style={styles.justified}>C++, as we all know is an extension to C language and was developed by Bjarne Stroustrup at bell labs. C++ is an intermediate-level language, as it comprises a confirmation of both high level and low-level language features. C++ is a statically typed, free form, multiparadigm, compiled general-purpose language.</Text>
                <Text style={styles.justified}>C++ is an Object Oriented Programming language but is not purely Object Oriented. Its features like  Friend and Virtual, violate some of the very important OOPS features, rendering this language unworthy of being called completely Object Oriented. It's a middle-level language.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>Benefits of C++ over C Language</Text>
                <Text style={{...styles.justified, ...styles.lineMargin}}>The major difference being the OOPS concept, C++ is an object-oriented language whereas C language is a procedural language. Apart from this, there are many other features of C++ which give this language an upper hand on C language.</Text>
                <Text style={{...styles.justified, ...styles.lineMargin}}>Following features of C++ makes it a stronger language than C,</Text>
                {
                    Constants.benefits.map((data, i) => renderListItem(data, i, "ol"))
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>Applications of C++ Programming</Text>
                <Text style={{...styles.justified, ...styles.lineMargin}}>As mentioned before, C++ is one of the most widely used programming languages. It has it's presence in almost every area of software development. I'm going to list few of them here:</Text>
                {
                    Constants.applications.map((data, i) => renderListItem(data, i, "ul"))
                }
            </View>
            <View style={styles.container}>
                <Text style={{...styles.justified, ...styles.lineMargin}}>There are many C++ compilers available which you can use to compile and run above mentioned program:</Text>
                {
                    Constants.compilers.map(renderListItem)
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>Basic types of Variables</Text>
                <Text style={{...styles.justified, ...styles.lineMargin}}>Each variable while declaration must be given a datatype, on which the memory assigned to the variable depends. Following are the basic types of variables,</Text>
                <Table>
                    <Rows data={Constants.data_types} flexArr={[1,3]} />
                </Table>

            </View>
        </View>
    )
}

export default IntroPage
