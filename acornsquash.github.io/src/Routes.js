import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

export default class Routes extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}