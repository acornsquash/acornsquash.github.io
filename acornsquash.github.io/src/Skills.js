import React from "react"
import JavaScript from "./javascript-39415.png"
import ReactLogo from "./pngegg.png"
import HTMLlogo from "./html5.png"
import CSSlogo from "./css-48.png"
import NodeJSlogo from "./nodeJS.png"
import Expresslogo from "./expressjs-icon.png"
import PostgreSQLlogo from "./PostgreSQL.png"

export default class Skills extends React.Component {
    render(){
        return(
            <div className="content">
                
            <h1>I am skilled in: HTML5, CSS, JavaScript, Typescript, React, React-redux, Jest, Apollo / graphQL, node.js, express.js, Sequelize.js, PostgreSQL</h1>
            <div >
            <div className="icons">
            <img src={JavaScript} alt="javascript logo"></img>
            <img src={ReactLogo} alt="react logo"></img>
            <img src={HTMLlogo} alt="HTML 5 logo"></img>
            <img src={CSSlogo} alt="CSS logo"></img>
            <img src={NodeJSlogo} alt="node JS logo"></img>
            <img src={Expresslogo} alt="express JS logo"></img>
            <img src={PostgreSQLlogo} alt="PostgreSQL logo"></img>
            </div>
            </div>
            </div>
        )
    }
}