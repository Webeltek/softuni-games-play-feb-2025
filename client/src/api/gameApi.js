import { useContext, useEffect, useState } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/games'

export default {
    async getAll(signal){
        const result = await request.get(baseUrl);
        const games = Object.values(result);
        // console.log(games);
        
        return games; 
    },
    getOne(gameId){
        return request.get(`${baseUrl}/${gameId}`);
    },
    create(gameData){
        return request.post(baseUrl, gameData)
    },
    edit(gameId, gameData){
        return request.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId});
    },
    delete(gameId){
        return request.delete(`${baseUrl}/${gameId}`)
    }
} 

export const useGames = ()=> {
    const [games, setGames] = useState([]);
    useEffect(()=>{
        request.get(`${baseUrl}`)
        .then(setGames);

    },[])

    return {
        games,
    }
}

export const useCreateGame = ()=> {
    const { accessToken} = useContext(UserContext);
    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }
    const create = (gameData) => {
        return request.post(baseUrl, gameData, options)
    }

    return {
        create
    }
}

