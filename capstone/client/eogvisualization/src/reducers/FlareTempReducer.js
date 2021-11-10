const initialState = []

const FlareTempReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FLARE_DATA":
            return [...state, action.payload];
            default:
                return state;
    }
}

export default FlareTempReducer;