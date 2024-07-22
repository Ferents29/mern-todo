import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/authPages/login";
import Registration from "./pages/authPages/registration";
import ActiveTodos from "./pages/ActiveTodos/activeTodos";
import CalendarEvents from "./pages/CalendarEvents/calendarEvents";
import Resources from "./pages/Resources";
import Resource from "./pages/Resource";
import Documents from "./pages/Documents/documents";

export const useRoutes = isLogin => {
    if (isLogin){
        return (
            <Switch>
                <Route path="/active-todos" component={ActiveTodos} />
                <Route path="/calendar-events" component={CalendarEvents} />
                <Route path="/documents" component={Documents} />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/resource/:id" component={Resource} />
                <Redirect to="/" />
            </Switch>
        )
    }else {
        return (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                {/*<Redirect to="/login" />*/}
            </Switch>
        )
    }
}