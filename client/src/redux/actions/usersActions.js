export const usersActions = {
    getUsers: (payload) => ({
        type: "GET_USERS",
        payload,
    }),
    addUsers: (payload) => ({
        type: "ADD_USERS",
        payload,
    })
}