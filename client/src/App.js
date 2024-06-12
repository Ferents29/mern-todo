import React, {useEffect} from "react";
import Nawbar from "./components/Nawbar/Nawbar";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import axios from "axios";
import {usersActions} from "./redux/actions/usersActions";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";

function App() {
    const dispatch = useDispatch();
    const {token,userId,isReady,login,logout} = useAuth();
    const isLogin = !!token;
    const routes = useRoutes(isLogin);
    const { loading } = useSelector(state => state.usersReducer);

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(usersActions.getUsers());
                const response =
                    await axios.get("/api/auth/all_users", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                dispatch(usersActions.addUsers(response.data.users));
            } catch (error) {
                console.log('Error:', error);
            }
        }
        fetchData();
    }, []);

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
