const initialState = {
    loading: false,
    calendarEvents: [],
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CALENDAR_EVENT':
            return { ...state, loading: true };
        case 'ADD_CALENDAR_EVENT':
            return {
                ...state,
                loading: false,
                calendarEvents: [...action.payload],
            }
        case 'ADD_ONE_CALENDAR_EVENT':
            return {
                ...state,
                loading: false,
                calendarEvents: [
                    ...state.calendarEvents, action.payload
                ],
            }
        default:
            return state;
    }
};