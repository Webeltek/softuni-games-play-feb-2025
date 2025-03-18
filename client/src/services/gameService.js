import request from "../utils/request"

const baseUrl = 'http://localhost:3030/jsonstore/games'

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

