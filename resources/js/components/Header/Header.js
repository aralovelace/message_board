import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import { MDBNavbarNav, MDBNavItem, MDBNavLink} from "mdbreact";

class Header extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
        };
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/login');
    }

    render() {
        const aStyle = {
            cursor: 'pointer'
        };

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="">Board</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MDBNavbarNav left>
                        <MDBNavItem active><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem>
                        <MDBNavItem ><MDBNavLink to="/board">Board</MDBNavLink></MDBNavItem>
                        {this.state.isLoggedIn ?
                            <MDBNavItem ><MDBNavLink to="/board">Board</MDBNavLink></MDBNavItem> : "" }
                        {!this.state.isLoggedIn ?
                        <MDBNavItem ><MDBNavLink to="/login">Login</MDBNavLink></MDBNavItem>  : "" }
                        {!this.state.isLoggedIn ?
                        <MDBNavItem ><MDBNavLink to="/register">Register</MDBNavLink></MDBNavItem> : "" }
                    </MDBNavbarNav>
                    <MDBNavbarNav right></MDBNavbarNav>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);