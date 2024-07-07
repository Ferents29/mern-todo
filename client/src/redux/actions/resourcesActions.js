export const resourcesActions = {
    getAllResourcesRequest: (payload) => ({
        type: "GET_ALL_RESOURCES_REQUEST",
        payload,
    }),
    getAllResourcesSuccess: (payload) => ({
        type: "GET_ALL_RESOURCES_SUCCESS",
        payload,
    }),
    addResourceRequest: (payload) => ({
        type: "ADD_RESOURCE_REQUEST",
        payload,
    }),
}