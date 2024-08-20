export const documentsActions = {
    getDocumentsRequest: (payload) => ({
        type: "GET_DOCUMENTS_REQUEST",
        payload,
    }),
    getDocumentsSuccess: (payload) => ({
        type: "GET_DOCUMENTS_SUCCESS",
        payload,
    }),
    getDocumentsError: (payload) => ({
        type: "GET_DOCUMENTS_ERROR",
        payload,
    }),


    getDocumentIdRequest: (payload) => ({
        type: "GET_DOCUMENT_ID_REQUEST",
        payload,
    }),
    getDocumentIdSuccess: (payload) => ({
        type: "GET_DOCUMENT_ID_SUCCESS",
        payload,
    }),
    getDocumentIdError: (payload) => ({
        type: "GET_DOCUMENT_ID_ERROR",
        payload,
    })
}