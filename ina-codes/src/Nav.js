import React from "react";
import { Link } from "react-router-dom";
import NameBox from "./name box.svg"

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
            <Link to="/"><img src={NameBox} alt="ina-codes-logo"></img></Link>
            <div className="button-container">
            <button><Link to="/about">About</Link></button>
            <button><Link to="/skills">Skills</Link></button>
            <button><Link to="/projects">Projects</Link></button>
            <button id="contact"><Link to="/contact">Contact</Link></button>
            </div>
            </div>
        )
    }
}