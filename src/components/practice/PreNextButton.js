import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import store from '../../store'
import { SET_SELECTED_PAGE_ID } from '../../actions'
import { useDispatch } from 'react-redux'

const styles = StyleSheet.create({
    header_view: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    float_right: {
        flexDirection: 'row'
    }
})

const PreNextButton = ({ pageId }) => {
    const dispatch = useDispatch()
    const lastPageId = store.getState().lastPageId

    return (
        <View style={styles.header_view}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.float_right}
                disabled={pageId===0}
                onPress={() => {
                    dispatch({
                        type: SET_SELECTED_PAGE_ID,
                        payload: {
                            pageId: pageId - 1
                        }
                    })
                }}
            >
                <Icon name="angle-left" size={20} style={{ marginRight: 8 }} />
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.float_right}
                onPress={() => {
                    if(pageId===lastPageId-1) {
                        dispatch({
                            type: SET_SELECTED_PAGE_ID,
                            payload: {
                                pageId: 0
                            }
                        })    
                    } else {
                        dispatch({
                            type: SET_SELECTED_PAGE_ID,
                            payload: {
                                pageId: pageId + 1
                            }
                        })
                    }
                }}
            >
                <Text>Next</Text>
                <Icon name="angle-right" size={20} style={{ marginLeft: 8 }} />
            </TouchableOpacity>
        </View>
    )
}

export default PreNextButton
