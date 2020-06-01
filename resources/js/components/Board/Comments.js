import React, {Component} from "react";
import Moment from "react-moment";
import {withRouter} from "react-router-dom";
import CommentForm from "./CommentForm";
import Comment from "../apis/Comment";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            post_id:this.props.match.params.id
        }
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    componentDidMount() {

        Comment.getCommentsByPost(this.state.post_id).then (response =>
            this.setState({
                comments: response.data
            })
        )

    }

    handleAddComment(comment) {
        Comment.store(comment)
            .then(response => {

                this.setState(prevState => ({
                    comments: prevState.comments.concat(response.data)
                }))

            }).catch(err => {
            this.setState({
                error_message: "There is an error",
                errors: "There is an error"
            });
        });

    }

    render() {
        return (
            <div>
            <div className="row">
                <h3>Comments</h3>
                <div id="comments">
                    {
                        this.state.comments.length > 0?(
                            <ol className="commentList">
                                {
                                    this.state.comments.map(comment =>
                                        <li className="depth-1" key={comment.id}>
                                            <div className="comment-content">
                                                <div className="comment-info">
                                                    <cite>{comment.user.name}</cite>
                                                </div>
                                                <div className="comment-meta">
                                                    <time className="comment-time" dateTime={comment.created_at}><Moment
                                                        format="YYYY/MM/DD" date={new Date(comment.created_at)}/></time>
                                                </div>
                                                <div className="comment-text">
                                                    <p>{comment.comment}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            </ol>
                        ) : null
                    }
                </div>
            </div>
                <div className="row">
                    <CommentForm post_id={this.state.post_id} onAdd={this.handleAddComment}  />
                </div>
            </div>



        );
    }
};

export default withRouter(Comments);