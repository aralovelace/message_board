import React, {Component} from "react";
import Post from "../apis/Post";
import Moment from "react-moment";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import {MDBIcon} from "mdbreact";
import ReactHtmlParser from 'react-html-parser';
import {withRouter} from "react-router-dom";
import Article from "./Article";


class Msg extends Component {


    constructor(prop) {
        super(prop);
        this.state = {
            post: {},
            category: '',
            user:'',
            comments: {}
        }
    }

    componentDidMount() {
        Post.getById(this.props.match.params.id).then (response =>
            this.setState({
                post: response.data ,
                category: response.data.category.name,
                user: response.data.user.name,
                comments: response.data.comments
            })
        )

    }

    render(){
        return (
            <div className="d-flex flex-column flex-md-row align-items-md-center py-5"  key={this.state.post.id} >
                <div className="container">
                    <div className="row">
                        <Article post={this.state.post} category={this.state.category} user={this.state.user} key={this.state.post.id}  />
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Comments</h3>
                            <div id="comments">
                                {
                                    this.state.post.hasOwnProperty('comments') && this.state.comments.length > 0?(
                                    <div>
                                        <Comments comments={this.state.comments} />
                                    </div>
                                    ): null
                                }
                            </div>
                            <CommentForm post_id={this.state.post.id}  />
                        </div>
                    </div>

                </div>
            </div>
        );

    }

}

export default withRouter(Msg);