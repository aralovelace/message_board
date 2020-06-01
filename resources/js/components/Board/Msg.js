import React, {Component} from "react";
import Comments from "./Comments";
import {withRouter} from "react-router-dom";
import Article from "./Article";
import ReactDOM from 'react-dom';


class Msg extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            post_id: this.props.match.params.id
        }
    }


    render(){
        return (
            <div className="d-flex flex-column flex-md-row align-items-md-center py-5" >
                <div className="container">
                    <div className="row">
                        <Article post_id={this.state.post_id}   />
                        <hr />
                    </div>
                    <Comments/>
                </div>
            </div>
        );
    }
}

export default withRouter(Msg);