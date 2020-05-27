import React, {Component} from "react";
import Post from "../apis/Post";
import Moment from "react-moment";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import {MDBIcon} from "mdbreact";
import ReactHtmlParser from 'react-html-parser';


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
            <div className="d-flex flex-column flex-md-row align-items-md-center py-5">>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 entry">
                                <h2>{this.state.post.title}</h2>
                                <div className="entry-meta">
                                    <ul>
                                        <li> <MDBIcon far icon="calendar" /> Posted on: <Moment format="YYYY/MM/DD" date={new Date(this.state.post.created_at)} />
                                        </li>
                                        <li><MDBIcon far icon="tags" /> Category: {this.state.category}</li>
                                        <li><MDBIcon far icon="user" /> Posted by: {this.state.user}</li>
                                    </ul>
                                </div>
                            <div className="entry-content">
                                <p className="lead">{ ReactHtmlParser(this.state.post.body) }</p>
                            </div>
                        </div>
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

export default Msg;