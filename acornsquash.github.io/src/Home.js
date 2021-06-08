import React from "react"
import Boat from "./boat.jpg"
import { Link } from "react-router-dom"

export default class Home extends React.Component {
    render() {
        return(
            <div className="content-home">
                <div className="content-box-home">
                <h1 id="dash">> > ></h1>
            <p>Hi! I'm Ina, recent coding bootcamp grad and aspiring JS developer.<a href="https://docs.google.com/document/d/e/2PACX-1vTybdm6gkaQ_kzwjKp9WVR-1hx5NdZ5vKHuZe_lQloslkHKdgB6UfwKXaE4edHLS-JgK2mVlIiEHUfw/pub" target="_blank" rel="noopener noreferrer"><button>Résumé</button></a></p>
            
            <p><img id="me" src={Boat} alt="It's me at work"></img> </p>
            </div>
            </div>
        )
    }
}