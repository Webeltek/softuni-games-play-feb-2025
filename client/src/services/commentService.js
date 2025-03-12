import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, gameid, comment){
        return request.post(baseUrl, {email, comment} ) // Important not to miss return because the Promise must be returned and awaited inside the caller
    }
}