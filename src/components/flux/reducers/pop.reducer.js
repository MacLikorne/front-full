export const PopType = {
    EDIT_POP: 'EDIT_POP',
    RESET_POP: 'RESET_POP'
}

export const popReducer = (state, action) => {
    switch (action.type) {
        case PopType.EDIT_POP:
            return action.payload
        case PopType.RESET_POP:
            return 1
        default:
            return state.pop
    }
}