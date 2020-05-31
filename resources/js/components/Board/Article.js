import React, {Component} from "react";
import {MDBIcon} from "mdbreact";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";

class Article extends Component {


    render() {

        return (
            <div className="col-md-12 entry">
                <h2>{this.props.post.title}</h2>
                <div className="entry-meta">
                    <ul>
                        <li> <MDBIcon far icon="calendar" key={this.props.post.created_at} /> Posted on: <Moment format="YYYY/MM/DD" date={new Date(this.props.post.created_at)} />
                        </li>
                        <li><MDBIcon far icon="tags" key={this.props.category} /> Category: {this.props.category}</li>
                        <li><MDBIcon far icon="user" key={this.props.user} /> Posted by: {this.props.user}</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p className="lead">{ ReactHtmlParser(this.props.post.body) }</p>
                </div>
            </div>

        );

    }


}

export default Article;
