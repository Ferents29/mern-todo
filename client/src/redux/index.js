import {combineReducers} from "redux";
import {usersReducer} from "./reducers/usersReducer";
import {calendarReducer} from "./reducers/calendarReducer";
import {resourcesReducer} from "./reducers/resourcesReducer";
import {resourceReducer} from "./reducers/resourceReducer";

export const rootReducer = combineReducers({
    usersReducer,
    calendarReducer,
    resourcesReducer,
    resourceReducer,
})