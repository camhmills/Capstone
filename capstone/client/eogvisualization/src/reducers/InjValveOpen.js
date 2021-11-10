const initialState = []

const InjValveOpenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INJ_DATA":
            return [...state, action.payload];
            default:
                return state;
    }
}

export default InjValveOpenReducer;