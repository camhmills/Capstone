const initialState = { 
    loggedin: false,
    username: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { 
                loggedin : action.payload.loggedin,
                username : action.payload.username
            };
        case "LOGOUT":
            return {...state, 
                loggedin : false, 
                username : ""
            };
        default:
            break;
    }
    return state;
}

export default LoginReducer;