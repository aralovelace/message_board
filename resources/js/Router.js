import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login/Login";
import Board from "./components/Board/Board";
import Msg from "./components/Board/Msg";
import NotFound from "./components/NotFound/NotFound";
import AddNewPost from "./components/Post/AddNew";



const Main = () => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/board" component={Board} />
        <PrivateRoute path="/post/:id" component={Msg} />
        <PrivateRoute path="/new" component={AddNewPost} />
        <Route component={NotFound} />
    </Switch>


)

export default Main;