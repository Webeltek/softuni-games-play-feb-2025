import { useContext, useEffect, useRef } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () =>{
    const abortRef = useRef(new AbortController());

    
    const login = async (email, password) => {
        return request.post(
            `${baseUrl}/login`, 
            {email, password}, 
            { signal: abortRef.current.signal}
        );
        
    }
    
    useEffect(() => {
        const abortController = abortRef.current;
        return  () => abortController.abort();
    },[])

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) => 
        request.post(`${baseUrl}/register`, { email, password}); // returning expression body - one line
    

    return {
        register
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext)

    useEffect(() => {
        if(!accessToken){
            return;
        }

        const options = { 
            headers: { 'X-Authorization': accessToken}
        };

        
        request.get(`${baseUrl}/logout`, null, options)
        .then(userLogoutHandler)
        
    },[accessToken, userLogoutHandler]);

    console.log(accessToken);
    

    return {
        isLoggedOut: !!accessToken  // TODO is better to return the actual isLoggetOut state from context instead of derived value !!accessToken because !!accessToken is not updated to latest value 
    }

}

