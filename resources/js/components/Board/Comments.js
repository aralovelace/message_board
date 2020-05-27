import React from "react";
import Moment from "react-moment";

const Comments = (props) => {
        return (
            <ol className="commentList">
                {
                    props.comments.map(comment =>
                        <li className="depth-1" key={comment.id}>
                            <div className="comment-content">
                                <div className="comment-info">
                                    <cite>{comment.user.name}</cite>
                                </div>
                                <div className="comment-meta">
                                    <time className="comment-time" dateTime={comment.created_at}><Moment format="YYYY/MM/DD" date={new Date(comment.created_at)} /></time>
                                </div>
                                <div className="comment-text">
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ol>
        );
};

export default Comments;