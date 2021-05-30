import React from "react";
import { Link } from "react-router-dom";
import NameBox from "./name box.svg"

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
             <li>
            <Link to="/"><img src={NameBox} alt="ina"></img></Link>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/skills">Skills</Link></button>
            <button><Link to="/contact">Contact</Link></button>
            </li>
            </div>
        )
    }
}