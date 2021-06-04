import React from 'react'
import {View, Text, StyleSheet, FlatList, VirtualizedList} from 'react-native'
import Colors from '../../../assets/colors'
import Constants from "./Constants"
import Section from "../../custom/Section"
import {Table, Row, Rows} from 'react-native-table-component'

const styles = StyleSheet.create({
    mainHeader: {
        backgroundColor: Colors.teal,
        textAlign: 'center',
        padding: 24,
        color: Colors.white,
        fontSize: 24,
    },
    container: {
        padding: 8,
        marginBottom: 16
    },
    redHighlight: {
        color: Colors.red,
        fontWeight: 'bold'
    },
    justified: {
        textAlign: 'justify'
    },
    lineMargin: {
        marginBottom: 8
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8
    },
    sectionHeader: {
        backgroundColor: Colors.darkGray,
        textAlign: 'center',
        padding: 24,
        color: Colors.white,
        fontSize: 24,
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
    }
})

const IntroPage = () => {
    const renderListItem = (item, i) => {
        return <Text key={i} style={{textAlign: 'justify'}}>{`\u2022 ${item}`}</Text>
    }

    return (
        <View style={{ padding: 8 }}>
            <Text style={styles.mainHeader}>C Programming Introduction</Text>
            <View style={styles.container}>
                <Text style={{...styles.lineMargin, ...styles.justified}}>C is a general-purpose high level language
                    that was originally developed by <Text style={styles.redHighlight}>Dennis Ritchie</Text> for the
                    Unix operating system. It was first implemented on the Digital Equipment Corporation PDP-11 computer
                    in 1972.</Text>
                <Text style={{...styles.lineMargin, ...styles.justified}}>The Unix operating system and virtually all Unix applications are written in the C language. C has now become a widely used professional language for various reasons.</Text>
                {
                    Constants.features.map(renderListItem)
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>Facts about C</Text>
                {
                    Constants.facts.map(renderListItem)
                }
            </View>
            <View style={styles.container}>
                <Text style={{...styles.header, textAlign: 'center'}}>Applications of C Programming</Text>
                <Text style={{...styles.justified, ...styles.lineMargin}}>C was initially used for system development work, particularly the programs that make-up the operating system. C was adopted as a system development language because it produces code that runs nearly as fast as the code written in assembly language. Some examples of the use of C are -</Text>
                {
                    Constants.applications.map(renderListItem)
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Basic Definitions</Text>

                <Section
                    header={Constants.break_and_continue.header}
                    lines={Constants.break_and_continue.lines}
                    code={Constants.break_and_continue.code}
                    output={Constants.break_and_continue.output}
                    description={Constants.break_and_continue.description}
                />

                <Section
                    header={Constants.switch.header}
                    lines={Constants.switch.lines}
                    code={Constants.switch.code}
                />

                <Section
                    header={Constants.char.header}
                    lines={Constants.char.lines}
                    code={Constants.char.code}
                    description={Constants.char.description}
                />

                <Section
                    header={Constants.const.header}
                    lines={Constants.const.lines}
                    code={Constants.const.code}
                />

                <Section
                    header={Constants.do_while.header}
                    code={Constants.do_while.code}
                />

                <Section
                    header={Constants.double.header}
                    lines={Constants.double.lines}
                    code={Constants.double.code}
                    description={Constants.double.description}
                />

                <Section
                    header={Constants.if_else.header}
                    lines={Constants.if_else.lines}
                    code={Constants.if_else.code}
                    description={Constants.if_else.description}
                />

                <Section
                    header={Constants.enum.header}
                    lines={Constants.enum.lines}
                    code={Constants.enum.code}
                    description={Constants.enum.description}
                />

                <Section
                    header={Constants.extern.header}
                    lines={Constants.extern.lines}
                />

                <Section
                    header={Constants.for.header}
                    lines={Constants.for.lines}
                    code={Constants.for.code}
                    output={Constants.for.output}
                    description={Constants.for.description}
                />

                <Section
                    header={Constants.goto.header}
                    lines={Constants.goto.lines}
                    code={Constants.goto.code}
                    output={Constants.goto.output}
                />

                <Section
                    header={Constants.int.header}
                    lines={Constants.int.lines}
                    code={Constants.int.code}
                    description={Constants.int.description}
                />

                <Section
                    header={Constants.short.header}
                    lines={Constants.short.lines}
                    code={Constants.short.code}
                />

                <Text style={styles.lineMargin}>Range of int type data types</Text>
                <Table>
                    <Row data={Constants.int_ranges.header} flexArr={[1,2]} textStyle={styles.subHeader} />
                    <Rows data={Constants.int_ranges.data} flexArr={[1,2]} />
                </Table>

                <Section
                    header={Constants.return.header}
                    lines={Constants.return.lines}
                    code={Constants.return.code}
                    description={Constants.return.description}
                />

                <Section
                    header={Constants.sizeof.header}
                    lines={Constants.sizeof.lines}
                    code={Constants.sizeof.code}
                    description={Constants.return.description}
                />

                <Section
                    header={Constants.void.header}
                    lines={Constants.void.lines}
                    code={Constants.void.code}
                    description={Constants.void.description}
                />
            </View>
        </View>
    );
}

export default IntroPage;
