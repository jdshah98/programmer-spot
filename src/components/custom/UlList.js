import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Colors from "../../assets/colors";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    justified: {
        textAlign: 'justify'
    },
    lineMargin: {
        marginBottom: 8
    },
    bold: {
        fontWeight: 'bold'
    }
})

const ListItem = ({item}) => {
    return (
        <View style={styles.row}>
            <Icon name={"dot-single"} size={24}/>
            <View style={{marginTop: 1, paddingLeft: 4}}>
                {
                    typeof item==="object" && <Text style={styles.bold}>{item.title}</Text>
                }
                <Text style={{...styles.justified, ...styles.lineMargin}}>{typeof item==="object" ? item.subject : item}</Text>
            </View>
        </View>
    )
}

const UlList = ({items}) => {
    return items.map((reason, i) => <ListItem key={i} item={reason}/>)
}

export default UlList