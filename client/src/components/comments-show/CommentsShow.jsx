export default function CommentsShow({
    comments
}) {
    
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {/* <!-- list all comments for current game (If any) --> */}
                {comments.length > 0
                ? comments.map( ({_id, _ownerId, comment}) => (
                    <li key={_id} className="comment">
                        <p>{_ownerId}: {comment}</p>
                    </li>
                ) ) 
                : <p className="no-comment">No comments.</p>
                }
                
                
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            
        </div>
    );
}