import React, {Component} from "react";
import FlashMessage from "react-flash-message";
import {Button} from "react-bootstrap";
import Comment from "../apis/Comment";
import { withRouter } from 'react-router-dom';


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            error_message: null,
            errors: null,
            success_message: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            comment: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            error_message: null,
            errors: null
        });
        Comment.store({'post_id': this.props.post_id  , 'comment':  this.state.comment }).then(response => {


            alert(response.data.message);
            //this.props.history.push("/post/"+this.props.post_id+"?comment-updated");
            this.props.history.push("/board");
            /*
            this.setState({
                success_message: response.data.message,
                comment: ""
            });
            *
             */





        }).catch(err => {
            this.setState({
                error_message: "There is an error",
                errors: "There is an error"
            });
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
                                                value={this.state.comment}>
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
                                                name="singlebutton"
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