import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
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

    logOut(e) {
        e.preventDefault();

        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        location.reload()

    }





    render() {
        const aStyle = {
            cursor: 'pointer'
        };

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <span className="navbar-brand">MSGBoard</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MDBNavbarNav left>
                        {!this.state.isLoggedIn ?
                        <MDBNavItem active><MDBNavLink to="/">Home</MDBNavLink></MDBNavItem> : "" }
                        {this.state.isLoggedIn ?
                            <MDBNavItem active><MDBNavLink to="/board">Home</MDBNavLink></MDBNavItem> : "" }
                        {this.state.isLoggedIn ?
                            <MDBNavItem ><MDBNavLink to="#"  onClick={this.logOut}>Logout</MDBNavLink></MDBNavItem> : "" }
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