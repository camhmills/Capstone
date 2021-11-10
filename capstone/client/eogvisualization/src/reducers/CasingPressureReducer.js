const initialState = []

const CasingPressureReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CASING_DATA":
            return [...state, action.payload];
            default:
                return state;
    }
}

export default CasingPressureReducer;