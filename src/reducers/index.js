import {
    SET_COURSE_SELECTED,
    SET_SELECTED_PAGE_ID,
    SET_LAST_PAGE_ID
} from '../actions'

const initialState = {
    selectedCourse: null,
    pageId: 0,
    lastPageId: 0
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_COURSE_SELECTED: {
            return {
                ...state,
                selectedCourse: payload.selectedCourse,
                pageId: 0
            }
        }
        case SET_SELECTED_PAGE_ID: {
            return {
                ...state,
                pageId: payload.pageId
            }
        }
        case SET_LAST_PAGE_ID: {
            return {
                ...state,
                lastPageId: payload.lastPageId
            }
        }
        default:
            return state
    }
}

export default reducer
