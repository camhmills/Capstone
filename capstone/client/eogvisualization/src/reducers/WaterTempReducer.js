const initialState = []

const WaterTempReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WATER_DATA":
            return [...state, action.payload];
            default:
                return state;
    }
}

export default WaterTempReducer;