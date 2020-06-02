import React, {Component} from "react";
import ReactDOM from "react-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import Post from "../apis/Post";
import 'moment-timezone';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";




class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            posts: [],
            modal: false,
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
            <Link to={'/post/'+ cell}> {row.title} </Link>
        );
    };

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    };

    cancelTask = () => {
        this.setState({title: "", body: "", cat: "" });
        this.toggleModal();
    };

    addTask = () => {
        if (this.state.title) {
            // add DB
            this.setState({title: "", body: "", cat: "" });
            this.toggleModal();
        }
    };



    render() {
        this.state.products = [];
        this.state.posts.map(
            post => this.state.products.push({
                'title': post.title,
                'read' : post.id,
                'user': post.user.name,
                'cat': post.category.name,
                'date': <Moment format="YYYY/MM/DD" date={new Date(post.created_at)} />
            }));

        return (
            <div className="d-flex flex-column flex-md-row align-items-md-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Message Board</h2>
                            <div>
                                <BootstrapTable
                                    bootstrap4
                                    keyField='id'
                                    data={this.state.products }
                                    columns={ this.state.columns }
                                    stripped
                                    hover
                                    condensed
                                    pagination={paginationFactory({})}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;