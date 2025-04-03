import { Component } from "react";
import request from "../../../utils/request";
import CommentsCreate from "../../comments-create/CommentsCreate";

const commentsUrl = 'http://localhost:3030/data/comments'

export default class AdminComments extends Component{
    constructor(props){
        console.log('component initialization');
        
        super(props);

        this.state = {
            comments: [{ text: 'test test'}],
        }
    }

    async componentDidMount(){
        console.log('component mount');
        
        const comments = await request.get(commentsUrl);
        this.setState({ comments })
        
    }


    render(){
        return (
            <ul>
                {this.state.comments.map( comment => <CommentsCreate key={comment._id} content={comment.comment} /> )}
            </ul>
        )
    }
}