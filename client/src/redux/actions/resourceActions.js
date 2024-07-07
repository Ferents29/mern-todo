export const resourceActions = {
    getResourceRequest: (payload) => ({
        type: "GET_RESOURCE_REQUEST",
        payload,
    }),
    getResourceSuccess: (payload) => ({
        type: "GET_RESOURCE_SUCCESS",
        payload,
    }),
}