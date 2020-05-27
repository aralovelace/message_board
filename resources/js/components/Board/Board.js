import React, {Component} from "react";
import ReactDOM from "react-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import Post from "../apis/Post";
import 'moment-timezone';
import Moment from "react-moment";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            posts: [],
            spinner: false,
            products: [],
            columns : [{
                dataField: 'user',
                text: 'User',
                sort: true
            },{
                dataField: "read",
                text: "Title",
                formatter: this.readMore,
                formatExtraData: {  },
                sort: true
            },{
                dataField: 'cat',
                text: 'Category',
                sort: true
            },{
                dataField: 'date',
                text: 'Date Posted',
                sort: true
            }
            ]
        };

    }
    componentDidMount()
    {
        this.setState({
            spinner: true
        });

        Post.getAll().then(response => {
            this.setState({
                posts: response.data,
                spinner: false
            });
        });


    }

    readMore =  (cell, row) => {

        return (
            <Link to={'/board/'+ cell}> {row.title} </Link>
        );
    };

    render() {

        this.state.posts.map(
            post => this.state.products.push({
                'title': post.title,
                'read' : post.id,
                'user': post.user.name,
                'cat': post.category.name,
                'date': <Moment format="YYYY/MM/DD" date={new Date(post.created_at)} />
            }));



        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-16">
                        <h2>Message Board</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-4 mb-3 left">
                                <Button name="singlebutton"> Add New Post</Button>
                        </div>
                        </div>
                        <BootstrapTable bootstrap4 keyField='id' data={this.state.products } columns={ this.state.columns } >
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;