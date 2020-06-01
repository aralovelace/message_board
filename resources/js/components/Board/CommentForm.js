import React, {Component} from "react";
import FlashMessage from "react-flash-message";
import {Button} from "react-bootstrap";
import Comment from "../apis/Comment";
import { withRouter } from 'react-router-dom';


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error_message: null,
            errors: null,
            success_message: null,
            newComment: {
                comment: "",
                post_id: 0
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            newComment: {
                comment: e.target.value,
                post_id: this.props.post_id
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            newComment: {
                comment: ''
            },
            error_message: null,
            errors: null
        });


        this.props.onAdd(this.state.newComment);

        this.setState({
            success_message: "Success",

        });
    }


    render()
    {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">Leave a Comment</div>
                            <div className="card-body">
                                {
                                    this.state.error_message?
                                    <FlashMessage duration={60000} persistOnHover={true}>
                                        <h5 className={"alert alert-danger"}>{this.state.error_message}.</h5>
                                    </FlashMessage> : ''
                                }

                                {
                                    this.state.success_message ?
                                    <FlashMessage duration={60000} persistOnHover={true}>
                                        <h5 className={"alert alert-success"}>{this.state.success_message}</h5>
                                    </FlashMessage> : ''
                                }

                                <form onSubmit={this.handleSubmit}>
                                    <fieldset>
                                        <div className="form-group">
                                            <textarea
                                                name="comment"
                                                id="commentMessage"
                                                rows="10"
                                                cols="50"
                                                required
                                                className="form-control"
                                                placeholder="Add your comment"
                                                onChange={this.handleInput}
                                                value={this.state.newComment.comment}
                                                >
                                            </textarea>
                                        </div>
                                            {
                                                this.state.errors && this.state.errors.comment?
                                                    <FlashMessage duration={60000} persistOnHover={true}>
                                                        <h5 className={"alert alert-danger"}>{this.state.errors.comment[0]}.</h5>
                                                    </FlashMessage> : ''
                                            }
                                        <div className="form-group">
                                            <Button
                                                type="submit"
                                             >Submit
                                            </Button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default withRouter(CommentForm);