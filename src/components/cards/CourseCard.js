import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../resources/colors'

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        elevation: 4,
        marginVertical: 4,
        padding: 16
    },
    logo: {
        width: 40,
        height: 40,
        marginEnd: 8
    },
    text: {
        fontSize: 18,
        flex: 1
    }
})

const CourseCard = ({ item, setSelected, isSelected }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={() => {
            setSelected(item)
        }}>
            <Image source={item.logo} style={styles.logo} />
            <Text style={styles.text}>{item.title} Programming</Text>
            <Icon name={isSelected ? "check-circle" : "circle"} size={24} />
        </TouchableOpacity>
    )
}

export default React.memo(CourseCard, (prevProps, nextProps) => prevProps.isSelected===nextProps.isSelected)
