const initialState = {
    selectedCourse: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_COURSE_SELECTED':
            return {
                ...state,
                selectedCourse: payload.selectedCourse
            }
        default:
            return state
    }
}

export default reducer
