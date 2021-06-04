import React from "react";
import {Text, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginEnd: 8
    },
    justified: {
        textAlign: 'justify'
    },
    lineMargin: {
        marginBottom: 8
    }
})

const ListItem = ({ item, index }) => {
    return (
        <View style={styles.row}>
            <Text>{index+1}.</Text>
            <View style={{ marginTop: 1, marginStart: 10 }}>
                <Text style={{...styles.justified, ...styles.lineMargin}}>{item}</Text>
            </View>
        </View>
    )
}

const UlList = ({items}) => {
    return items.map((reason, i) => <ListItem key={i} item={reason} index={i} />)
}

export default UlList