export const resourceActions = {
    getResourceRequest: (payload) => ({
        type: "GET_RESOURCE_REQUEST",
        payload,
    }),
    getResourceSuccess: (payload) => ({
        type: "GET_RESOURCE_SUCCESS",
        payload,
    }),

    getUpdateResourceRequest: (payload) => ({
        type: "GET_UPDATE_RESOURCE_REQUEST",
        payload,
    }),
    getUpdateResourceSuccess: (payload) => ({
        type: "GET_UPDATE_RESOURCE_SUCCESS",
        payload,
    }),
}