import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <li>
            <h1>INA</h1>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/skills">Skills</Link></button>
            <button><Link to="/contact">Contact</Link></button>
            </li>
            </div>
        )
    }
}