import React, {Component} from "react";
import Post from "../apis/Post";
class Msg extends Component {


    constructor(prop) {
        super(prop);
        this.state = {
            post: {},
        }
    }

    componentDidMount() {
        Post.getById(this.props.match.params.id).then (response =>
            this.setState({post: response.data })
        )


    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <article  className = "entry">
                    <header className="entry-header">
                        <h2>{this.state.post.title}</h2>
                    </header>
                    </article>

                </div>
            </div>
        );

    }

}

export default Msg;