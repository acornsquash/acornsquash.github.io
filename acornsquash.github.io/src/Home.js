import React from "react"
import Boat from "./boat.jpg"

export default class Home extends React.Component {
    render() {
        return(
            <div className="content-home">
                <div className="content-box-home">
                <h1 id="dash">> > ></h1>
            <p>Hi! I'm Ina, recent coding bootcamp grad and aspiring JS developer.</p>
            <p><img id="me" src={Boat} alt="It's me at work"></img> </p>
            </div>
            </div>
        )
    }
}