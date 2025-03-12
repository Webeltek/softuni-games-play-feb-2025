import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, gameId, comment){
        return request.post(baseUrl, {email, gameId, comment} ) // Important not to miss return because the Promise must be returned and awaited inside the caller
    },
    async getAll(gameId){
        const comments = await request.get(baseUrl);

        // TODO: filter when migrate to collections
        //  Client filtering (don't do this)

        const gameComments = Object.values(comments).filter( comment => comment.gameId === gameId);
        console.log(gameComments);
        
        return gameComments;        
    }
}