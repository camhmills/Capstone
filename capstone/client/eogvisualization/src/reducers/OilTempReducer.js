const initialState = []

const OilTempReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_OIL_DATA":
            return [...state, action.payload];
        default:
                return state;
    }
}

export default OilTempReducer;