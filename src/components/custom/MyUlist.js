import React from 'react'
import { View, Text } from 'react-native'

const MyUlist = ({ items, style }) => {
    return (
        <View style={style}>
            {
                items.map(item => {
                    return <Text key={item.key}>&#10147;&ensp;{item.title}</Text>
                })
            }
        </View>
    )
}

export default MyUlist
