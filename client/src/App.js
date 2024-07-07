import React, {useCallback, useEffect} from "react";
import Nawbar from "./components/Nawbar/Nawbar";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import {usersActions} from "./redux/actions/usersActions";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";
import axios from "axios";

function App() {
    const dispatch = useDispatch();
    const {token,userId,isReady,login,logout} = useAuth();
    const isLogin = !!token;
    const routes = useRoutes(isLogin);
    const { loading } = useSelector(state => state.usersReducer);

    const getUsers = useCallback( async () => {
        try {
            dispatch(usersActions.getUsers());
            await axios.get("/api/auth/all_users", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                dispatch(usersActions.addUsers(response.data.users));
            });
        } catch (error) {
            console.log('Error:', error);
        }
    },[dispatch]);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

  return (
      <AuthContext.Provider value={{
          token,
          userId,
          isReady,
          login,
          logout,
          isLogin
      }}>
          {loading ? (
              <Spin size="large" />
          ) : (
              <div className="App">
                  <BrowserRouter>
                      <Nawbar/>
                      {routes}
                  </BrowserRouter>
              </div>
          )}
      </AuthContext.Provider>
  );
}

export default App;
