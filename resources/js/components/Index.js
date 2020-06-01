import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Main from '../Router';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Index extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }

   componentWillMount() {
        let state = localStorage["appState"];
        if (state){
            let AppState = JSON.parse(state);
            this.setState({isLoggedIn: AppState.isLoggedIn});
        }
    }

    render()
    {
        return (
            <div id="app" key="message_board">
                <BrowserRouter>
                    <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
                    <Route component={Main} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default Index;


if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
