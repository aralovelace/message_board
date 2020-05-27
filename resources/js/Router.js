import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login/Login";
import Board from "./components/Board/Board";


const Main = () => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/board/:id}" component={Home} />

    </Switch>


)

export default Main;