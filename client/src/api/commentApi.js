import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from '../utils/request'

const baseUrl = 'http://localhost:3030/data/comments';

function commentsReducer(state, action){
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}


export const useComments = (gameId) => {
    const { request} = useAuth();
    // const [comments , setComments] = useState([]);
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`,
            load: 'author=_ownerId:users',
        })

        request.get(`${baseUrl}?${searchParams.toString()}`, null)
        .then(result => {
            dispatch( { type: 'GET_ALL', payload: result});
        })
    },[gameId, request]) // TODO Fix this

    return {
        comments,
        addComment: (data) => dispatch({ type: 'ADD_COMMENT', payload: data})
        
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

    return { 
        create,
    }
}