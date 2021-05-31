import React from "react"
import JavaScript from "./javascript-39415.png"
import ReactLogo from "./pngegg.png"

export default class Skills extends React.Component {
    render(){
        return(
            <div className="content">
            <h1 className="content-box">I am skilled in: HTML5, CSS, JavaScript, React, React-redux, node.js, express.js, PostgreSQL, Firebase Cloud Storage, </h1>
            <img src={JavaScript} alt="javascript logo"></img>
            <img src={ReactLogo} alt="react logo"></img>
            </div>
        )
    }
}