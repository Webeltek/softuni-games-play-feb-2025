
export default function CommentsCreate({
    onCreate
}) {
    return (
            <article className="create-comment">
                <label>Add new comment:</label>
                <form action={onCreate} className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
    );
}