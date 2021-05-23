import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import styles from '../../assets/styles'

const CourseCard = ({ item, setSelected, isSelected }) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.courseCard} onPress={() => {
                setSelected(item)
            }}>
                <Image source={item.logo} style={styles.courseImage} />
                <Text style={styles.courseTitle}>{item.title} Programming</Text>
                <Icon name={isSelected ? "check-circle" : "circle"} size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(CourseCard, (prevProps, nextProps) => prevProps.isSelected===nextProps.isSelected)
