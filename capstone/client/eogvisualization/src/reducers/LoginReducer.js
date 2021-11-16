const initialState = { 
    loggedin : false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { 
                loggedin : true 
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