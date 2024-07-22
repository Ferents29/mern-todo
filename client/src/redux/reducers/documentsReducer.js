
const getInitialState = () => ({
    loading: false,
    documents: [],
})

export const documentsReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'GET_DOCUMENTS_REQUEST':
            return { ...state, loading: true };
        case 'GET_DOCUMENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                documents: action.payload
            };
        case 'GET_DOCUMENTS_ERROR':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};