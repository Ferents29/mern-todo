export const calendarEventsActions = {
    getCalendarEvent: (payload) => ({
        type: "GET_CALENDAR_EVENT",
        payload,
    }),
    addCalendarEvent: (payload) => ({
        type: "ADD_CALENDAR_EVENT",
        payload,
    }),
    addOneCalendarEvent: (payload) => ({
        type: "ADD_ONE_CALENDAR_EVENT",
        payload,
    })
}