
const getInitialState = () => ({
    loading: false,
    file: {},
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


        case 'GET_DOCUMENT_ID_REQUEST':
            return { ...state, loading: true };
        case 'GET_DOCUMENT_ID_SUCCESS':
            return {
                ...state,
                loading: false,
                file: action.payload
            };
        case 'GET_DOCUMENT_ID_ERROR':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};