const initialState = {
    loading: false,
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        case 'ADD_USERS':
            return { ...state, loading: false, users: action.payload };
        default:
            return state;
    }
};