import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import FlashMessage from "react-flash-message";
import {Button} from "react-bootstrap";
import Select from "react-select";
import Post from "../apis/Post";
import Category from "../apis/Category";
class AddNewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            category: "",
            categories: [],
            error_message: null,
            errors: null,
            success_message: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        Category.getAll().then(response => {
            this.setState({
                categories: response.data,

            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            error_message: null,
            errors: null
        });
        Post.add({
            'title' : this.state.title,
            'body': this.state.body,
            'category_id': this.state.category.value,
            'tags': ''
        }).then(response => {
            alert(response.data.message);
            this.props.history.push("/board");
            /*
            this.setState({
                success_message: response.data.message
            });
            */




        }).catch(err => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });

    }

    catSelect = (value, action) => {
        this.setState({category: value});
    }


    render() {
        let options = [];
        this.state.categories.map(
            cat => options.push({
                'label': cat.name,
                'value': cat.id,
            }
        ))

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">Add new Post</div>
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
                                            <input
                                                id="title"
                                                type="text"
                                                name="title"
                                                placeholder="Title"
                                                className="form-control"
                                                required
                                                onChange={e => this.setState({ title: e.target.value })}
                                                value={this.state.title}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="body"
                                                id="body"
                                                rows="10"
                                                cols="50"
                                                className="form-control"
                                                placeholder="Add your content here"
                                                onChange={e => this.setState({ body: e.target.value })}
                                                value={this.state.body}>
                                            </textarea>
                                        </div>

                                        <div className="form-group">
                                            <Select
                                                options={options}
                                                placeholder="Select category"
                                                value={this.state.category}
                                                onChange={this.catSelect.bind(this)}
                                            />
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
                                            > Submit
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

export default withRouter(AddNewPost);