const initialState = {
    loading: false,
    resource: {},
};

export const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESOURCE_REQUEST':
            return { ...state, loading: true };
        case 'GET_RESOURCE_SUCCESS':
            return {
                ...state,
                loading: false,
                resource: action.payload,
            }
        default:
            return state;
    }
};