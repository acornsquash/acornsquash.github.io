import React from "react";
import { Link } from "react-router-dom";
import NameBox from "./name box.svg"

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
            <Link to="/"><img src={NameBox} alt="ina-codes-logo"></img></Link>
            <div className="button-container">
            <Link to="/about"><button>About</button></Link>
            <Link to="/skills"><button>Skills</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/contact"><button id="contact">Contact</button></Link>
            </div>
            </div>
        )
    }
}