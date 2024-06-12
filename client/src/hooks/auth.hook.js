import {useCallback, useEffect, useState} from "react";

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isReady, setIsReady] = useState(false);

    const login = useCallback((jvtToken, id) => {
        setToken(jvtToken);
        setUserId(id);
        localStorage.setItem('userData', JSON.stringify( {
            userId:id,
            token:jvtToken,
        }));
    },[]);

    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }

    useEffect(() => {
        const userDataString = localStorage.getItem("userData");
        const data = JSON.parse(userDataString);
        if(data && data.token) {
            login(data.token,data.userId);
        }
        setIsReady(true);
    }, [login]);

    return {token,userId,isReady,login,logout};
}