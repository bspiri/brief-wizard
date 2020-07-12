function reducer(state, action) {
    switch (action.type) {
        case "SET_CHECK":
            return {
                ...state,
                select: action.check
            };
        default: return state
    }
}
export default reducer;