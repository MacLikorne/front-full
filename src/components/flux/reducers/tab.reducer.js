export const TabType = {
    EDIT_POS: 'EDIT_POS',
    RESET_POS: 'RESET_POS'
}

export const tabReducer = (state, action) => {
    switch (action.type) {
        case TabType.EDIT_POS:
            return action.payload
        case TabType.RESET_POS:
            return 0
        default:
            return state.tab
    }
}