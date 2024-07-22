const initialState = {
    loading: false,
    resources: [],
};

export const resourcesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_RESOURCES_REQUEST':
            return { ...state, loading: true };
        case 'GET_ALL_RESOURCES_SUCCESS':
            return {
                ...state,
                loading: false,
                resources: [...action.payload],
            }
        case 'GET_DELETE_RESOURCES_REQUEST':
            return { ...state, loading: true };
        case 'GET_DELETE_RESOURCES_SUCCESS':
            return {
                ...state,
                loading: false,
                resources: state.resources.filter(elem =>
                    elem._id !== action.payload),
            }
        case 'ADD_RESOURCE_REQUEST':
            return {
                ...state,
                loading: false,
                resources: [
                    ...state.resources,
                    action.payload
                ],
            }
        default:
            return state;
    }
};