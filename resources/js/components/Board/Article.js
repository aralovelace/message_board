import React, {Component} from "react";
import {MDBIcon} from "mdbreact";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";
import Post from "../apis/Post";

class Article extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            post: {},
            category: '',
            user: ''
        }

    }

    componentDidMount() {

        Post.getById(this.props.post_id).then (response =>
            this.setState({
                post: response.data ,
                category: response.data.category.name,
                user: response.data.user.name
            })
        )

    }


    render() {

        return (
            <div className="col-md-12 entry">
                <h2>{this.state.post.title}</h2>
                <div className="entry-meta">
                    <ul key={this.state.post.id}>
                        <li > <MDBIcon far icon="calendar"  /> Posted on: <Moment format="YYYY/MM/DD" date={new Date(this.state.post.created_at)} />
                        </li>
                        <li ><MDBIcon far icon="tags"  /> Category: {this.state.category}</li>
                        <li ><MDBIcon far icon="user"  /> Posted by: {this.state.user}</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p className="lead">{ ReactHtmlParser(this.state.post.body) }</p>
                </div>
            </div>

        );

    }


}

export default Article;
