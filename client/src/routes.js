import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/authPages/login";
import Registration from "./pages/authPages/registration";
import ActiveTodos from "./pages/ActiveTodos/activeTodos";

export const useRoutes = isLogin => {
    if (isLogin){
        return (
            <Switch>
                <Route path="/active-todos" component={ActiveTodos} />
                <Route path="/calendar-events" component={() => 212121} />
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