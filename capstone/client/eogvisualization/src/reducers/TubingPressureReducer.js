const initialState = []

const TubingPressureReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TUBING_DATA":
            return [...state, action.payload];
            default:
                return state;
    }
}

export default TubingPressureReducer;