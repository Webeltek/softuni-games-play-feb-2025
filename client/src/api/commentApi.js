import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';

export default {
    // create(email, gameId, comment){
    //     return request.post(baseUrl, {email, gameId, comment} ) // Important not to miss return because the Promise must be returned and awaited inside the caller
    // }
}

export const useComments = (gameId) => {
    const { request} = useAuth();
    const [comments , setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`
        })

        
        request.get(`${baseUrl}?${searchParams.toString()}`)
        .then(result => {
            
            setComments(result)})
    },[gameId]) // TODO Fix this

    return {
        comments,
    }
}

export const useCreateComment = () =>{
    const { request } = useAuth()

    const create = (gameId, comment) => {
        const commentData = {
            gameId,
            comment
        }
        return request.post(`${baseUrl}`, commentData);
    }

    return { create}
}