import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/Main Page/mainPage";
import Login from "./pages/authPages/login";
import Registration from "./pages/authPages/registration";

export const useRoutes = isLogin => {
    if (isLogin){
        return (
            <Switch>
                <Route path="/" component={MainPage} />
                <Redirect to="/" />
            </Switch>
        )
    }else {
        return (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Redirect to="/login" />
            </Switch>
        )
    }
}