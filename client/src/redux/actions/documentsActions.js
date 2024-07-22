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
    })
}