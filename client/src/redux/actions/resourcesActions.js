export const resourcesActions = {
    getAllResourcesRequest: (payload) => ({
        type: "GET_ALL_RESOURCES_REQUEST",
        payload,
    }),
    getAllResourcesSuccess: (payload) => ({
        type: "GET_ALL_RESOURCES_SUCCESS",
        payload,
    }),
    getDeleteResourcesRequest: (payload) => ({
        type: "GET_DELETE_RESOURCES_REQUEST",
        payload,
    }),
    getDeleteResourcesSuccess: (payload) => ({
        type: "GET_DELETE_RESOURCES_SUCCESS",
        payload,
    }),
    addResourceRequest: (payload) => ({
        type: "ADD_RESOURCE_REQUEST",
        payload,
    }),
}