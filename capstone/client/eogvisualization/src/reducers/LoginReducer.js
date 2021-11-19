const initialState = { 
    loggedin: false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { 
                loggedin : action.payload.loggedin 
            };
        case "LOGOUT":
            return { 
                loggedin : false
            };
        default:
            break;
    }
    return state;
}

export default LoginReducer;